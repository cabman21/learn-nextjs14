const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

async function getMovie(id: string) {
  const reponse = await fetch(`${API_URL}/${id}`);
  return reponse.json();
}

export default async function MovieDetail({
  params: { id },
}: {
  params: { id: string };
}) {
  //   console.log(props);
  console.log("id: %s", id);
  const movie = await getMovie(id);
  return <h1>{movie.title}</h1>;
}
