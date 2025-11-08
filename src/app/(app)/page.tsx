import { Suspense } from "react";
import { Benefits, Blog, Collections, Reviews, Trends } from "./_components";

export default function Home(): React.ReactElement {
  return (
    <Suspense fallback={""}>
      <Collections />
      <Trends />
      <Reviews />
      <Benefits />
      <Blog />
    </Suspense>
  );
}
