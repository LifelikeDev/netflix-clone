import requests from "../requests";
import EachRow from "./EachRow";
import "./Feed.css";

const Feed = () => {
  return (
    <section className="feed" style={{ color: "#eee" }}>
      <EachRow
        title="Netflix Originals"
        fetchURL={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <EachRow title="Trending Now" fetchURL={requests.fetchTrending} />
      <EachRow title="Top Rated" fetchURL={requests.fetchTopRated} />
      <EachRow title="Action Movies" fetchURL={requests.fetchActionMovies} />
      <EachRow title="Comedy Movies" fetchURL={requests.fetchComedyMovies} />
      <EachRow title="Horror Movies" fetchURL={requests.fetchHorrorMovies} />
      <EachRow title="Romance Movies" fetchURL={requests.fetchRomanceMovies} />
      <EachRow title="Documentaries" fetchURL={requests.fetchDocumentaries} />
    </section>
  );
};

export default Feed;
