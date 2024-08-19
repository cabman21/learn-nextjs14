import MovieInfo from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";
import { Suspense } from "react";

const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

export default async function MovieDetail({
  params: { id },
}: {
  params: { id: string };
}) {
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
