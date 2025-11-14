import { Benefits, Blog, Collections, Reviews, Trends } from "./_components";

export default function Home(): React.ReactElement {
  return (
    <>
      <Collections />
      <Trends />
      <Reviews />
      <Benefits />
      <Blog />
    </>
  );
}
