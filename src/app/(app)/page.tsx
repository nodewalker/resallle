import { Benefits, Collections, Reviews, Trends } from "./_components";

export default function Home(): React.ReactElement {
  return (
    <>
      <Collections />
      <Trends />
      <Reviews />
      <Benefits />
      <div className="">post from blog</div>
    </>
  );
}
