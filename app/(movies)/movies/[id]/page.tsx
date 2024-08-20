import { Suspense } from "react";
import MovieInfo, { getMovie } from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";

interface IParams {
  params: { id: string };
}

export async function generateMetadata({ params: { id } }: IParams) {
  const movie = await getMovie(id);
  return {
    title: movie.title,
  };
}

const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

export default async function MovieDetail({ params: { id } }: IParams) {
  return (
    <div>
      <Suspense fallback={<h5>Loading movie info</h5>}>
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback={<h5>Loading movie videos</h5>}>
        <MovieVideos id={id} />
      </Suspense>
    </div>
  );
}
