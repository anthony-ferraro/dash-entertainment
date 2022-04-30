import { paths } from "../utilities";
import Collection from "../components/Collection";
export default function Home({ router, userData }) {
  const displayCount = 12;
  return (
    <>
      <h1 className="c-white">Dash Entertainment</h1>
      <p className="body-L c-greyblue">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti officia cupiditate nobis mollitia voluptatum quos doloremque praesentium eius iste ex. Modi beatae, mollitia cumque pariatur quidem, commodi cum animi aperiam doloribus fuga sit quisquam vero ea impedit, nulla suscipit quos! Assumenda nulla fuga reiciendis quae ducimus ab officiis ad officia.
        <br></br>
        <br></br>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur itaque cumque error beatae debitis facilis!
      </p>
      <Collection label="Trending Now" path={paths.trending.all} type="wide" displayCount={displayCount} router={router} userData={userData} morePath="/trending?page=1"></Collection>
    </>
  )
}
