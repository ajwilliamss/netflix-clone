import { useState, useEffect } from "react";
import axios from "axios";
import apiRequests from "../../api/api";
import "./Hero.scss";

const heroImageUrl = "https://image.tmdb.org/t/p/original";

const Hero = () => {
  const [data, setData] = useState([]);
  const { getNetflixOriginals } = apiRequests;

  const fetchData = async () => {
    try {
      const response = await axios.get(getNetflixOriginals);
      // console.log(response);
      // console.log(response.data);
      // console.log(response.data.results);
      const results = response.data.results;
      setData(results[Math.floor(Math.random() * results.length - 1)]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // https://stackoverflow.com/questions/36703544/truncate-a-string-javascript
  const truncate = (str, max) => {
    return str?.length > max ? str.substr(0, max - 1) + "..." : str;
  };

  return (
    <header
      className="hero"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(${heroImageUrl}${data?.backdrop_path})`,
        backgroundPosition: "center center",
      }}
    >
      <div className="hero-contents">
        <h1 className="hero-title">{data?.name}</h1>
        <div className="hero-buttons">
          <button className="hero-button">Play</button>
          <button className="hero-button">My List</button>
        </div>
        <p className="hero-desc">{truncate(data?.overview, 150)}</p>
      </div>
      <div className="hero-fade"></div>
    </header>
  );
};

export default Hero;
