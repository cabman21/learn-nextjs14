import tomato from "../styles/movie-info.module.css";
import { API_URL } from "../app/(home)/page";

async function getMovie(id: string) {
  console.log(`Fetching movies: ${Date.now()}`);
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
}

export default async function MovieInfo({ id }: { id: string }) {
  const movie = await getMovie(id);
  return (
    <div className={tomato.container}>
      <img
        src={movie.poster_path}
        alt={movie.title}
        className={tomato.poster}
      />
      <div className={tomato.info}>
        <h1 className={tomato.title}>{movie.title}</h1>
        <h3>⭐️ {movie.vote_average.toFixed(2)}</h3>
        <p>{movie.overview}</p>
        <a href={movie.homepage} target={"_blank"}>Homepage &rarr;</a>
      </div>
    </div>
  );
}
