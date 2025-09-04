import { Collections, Reviews, Trends } from "./_components";

export default function Home(): React.ReactElement {
  return (
    <>
      <Collections />
      <Trends />
      <Reviews />
      <div className="">we you love us</div>
      <div className="">post from blog</div>
    </>
  );
}
