export const metadata = {
  title: "Home",
};

const URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

async function getMovies() {
  // console.log("I'm fetching");
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return fetch(URL).then((response) => response.json());
}

export default async function Root() {
  const movies = await getMovies();
  return <div>{JSON.stringify(movies)}</div>;
}
