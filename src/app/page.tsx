import NavBar from "./NavBar";
import PopularMovies from "./PopularMovies";
import "./globalcss.css";

export default function Home() {
  return (
    <main className="main">
      <NavBar />
      <PopularMovies />
    </main>
  );
}
