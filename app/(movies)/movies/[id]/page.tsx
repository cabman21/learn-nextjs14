import Link from "next/link";

const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

async function getMovie(id: string) {
  console.log(`Fetching movies: ${Date.now()}`);
  await new Promise((resolve) => setTimeout(resolve, 5000));
  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
}

async function getVideos(id: string) {
  console.log(`Fetching videos: ${Date.now()}`);
  await new Promise((resolve) => setTimeout(resolve, 5000));
  const response = await fetch(`${API_URL}/${id}/videos`);
  return response.json();
}

export default async function MovieDetail({
  params: { id },
}: {
  params: { id: string };
}) {
  console.log("start fetching");
  const movie = await getMovie(id);
  const videos = await getVideos(id);
  console.log("end fetching");
  return (
    <div>
      <h1>{movie.title}</h1>
      {videos.map((video) => (
        <li key={video.id}>
          <Link href={`/movies/${video.id}`}>{video.name}</Link>
        </li>
      ))}
    </div>
  );
}
