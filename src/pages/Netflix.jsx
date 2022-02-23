import Nav from "../components/Nav/Nav";
import Hero from "../components/Hero/Hero";
import Row from "../components/Row/Row";
import Footer from "../components/Footer/Footer";
import apiRequests from "../api/api";

const Netflix = () => {
  const {
    getTrending,
    getTopRated,
    getNetflixOriginals,
    getActionMovies,
    getComedyMovies,
    getDocumentaries,
    getHorrorMovies,
    getRomanceMovies,
  } = apiRequests;

  return (
    <>
      <Nav />
      <Hero />
      <main>
        <Row rowTitle="Trending Now" url={getTrending} />
        <Row rowTitle="Top Rated" url={getTopRated} />
        <Row rowTitle="Only On Netflix" url={getNetflixOriginals} />
        <Row rowTitle="Action Movies" url={getActionMovies} />
        <Row rowTitle="Comedy Movies" url={getComedyMovies} />
        <Row rowTitle="Documentaries" url={getDocumentaries} />
        <Row rowTitle="Horror Movies" url={getHorrorMovies} />
        <Row rowTitle="Romance Movies" url={getRomanceMovies} />
      </main>
      <Footer />
    </>
  );
};

export default Netflix;
