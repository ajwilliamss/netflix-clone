import { useState, useEffect, useRef } from "react";
import axios from "axios";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import "./Row.scss";

const posterUrl = "https://image.tmdb.org/t/p/original";

const Row = ({ rowTitle, url }) => {
  const [data, setData] = useState([]);
  const [trailer, setTrailer] = useState("");
  const [slideIndex, setSlideIndex] = useState(0);
  const [isMoved, setIsMoved] = useState(false);

  const rowItem = useRef(null);

  const fetchData = async () => {
    try {
      const response = await axios.get(url);
      // console.log(response);
      // console.log(response.data);
      // console.log(response.data.results);
      const results = response.data.results;
      setData(results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleTrailer = (item) => {
    if (!trailer) {
      movieTrailer(item?.name || item?.title || "")
        .then((url) => {
          const params = new URLSearchParams(new URL(url).search);
          // https://www.youtube.com/watch?v=Ew9ngL1GZvs
          // console.log(params.get("v"));
          setTrailer(params.get("v"));
        })
        .catch((error) => console.log(error));
    } else {
      setTrailer("");
    }
  };

  const obj = {
    height: "500",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const handleSlider = (direction) => {
    setIsMoved(true);
    let distance = rowItem.current.getBoundingClientRect().x;
    // console.log(distance);
    if (direction === "left" && slideIndex > 0) {
      rowItem.current.style.transform = `translateX(${465 + distance}px)`;
      let decrement = slideIndex - 1;
      setSlideIndex(decrement);
    } else if (direction === "right" && slideIndex < data.length - 7) {
      rowItem.current.style.transform = `translateX(${-465 + distance}px)`;
      let increment = slideIndex + 1;
      setSlideIndex(increment);
    }
  };

  return (
    <section className="row">
      <h2>{rowTitle}</h2>
      <MdKeyboardArrowLeft
        className={`slider-arrow left-arrow ${!isMoved && "hide"}`}
        size="6rem"
        onClick={() => handleSlider("left")}
      />
      <div className="netflix-item" ref={rowItem}>
        {data.map((item) => {
          const { id, backdrop_path, title } = item;
          return (
            <img
              src={`${posterUrl}${backdrop_path}`}
              alt={title}
              key={id}
              onClick={() => handleTrailer(item)}
            />
          );
        })}
      </div>
      {trailer && <YouTube videoId={trailer} opts={obj} />}
      <MdKeyboardArrowRight
        className="slider-arrow right-arrow"
        size="6rem"
        onClick={() => handleSlider("right")}
      />
    </section>
  );
};

export default Row;
