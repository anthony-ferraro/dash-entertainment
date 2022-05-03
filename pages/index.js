import { paths } from "../utilities";
import Hero from "../components/Hero";
import Collection from "../components/Collection";
import Image from 'next/image';
export default function Home({ router, userData }) {
  const displayCount = 12;
  return (
    <>
      <Hero router={router}></Hero>
      <Collection label="Trending Now" path={paths.trending.all} type="wide" displayCount={displayCount} router={router} userData={userData} morePath="/trending?page=1"></Collection>
    </>
  )
}
