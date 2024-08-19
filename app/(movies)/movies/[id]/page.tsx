export default function MovieDetail({
  params: { id },
}: {
  params: { id: string };
}) {
  //   console.log(props);
  console.log("id: %s", id);
  return <h1>Movie {id}</h1>;
}
