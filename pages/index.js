import Image from "next/dist/client/image";
import ContentList from "../components/ContentList"
import { server } from "../config/";
export default function Home({ content }) {
  const trendingContent = content.filter(contentItem => contentItem.isTrending === true);
  const recommendedContent = content.filter(contentItem => contentItem.isTrending === false);
  return (
    <>
      <p className="heading-L c-white">Trending</p>
      <div className="trending-list">
        {trendingContent.map((contentItem, index) =>
          <div key={index} className="trending-item"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.5)), url(${contentItem.thumbnail.trending.large})`,
              backgroundSize: 'cover',
            }}>
            <div className="content-info">
              <p>{contentItem.year}  <span>&#8226;</span>   <img src={`./assets/icon-category-${contentItem.category === "Movie" ? "movie" : "tv"}.svg`} alt="category symbol"></img> {contentItem.category} <span>&#8226;</span>  {contentItem.rating}</p>
              <p>{contentItem.title}</p>
            </div>
          </div>
        )}
      </div>
      <p className="heading-L c-white">Recommended for you</p>
      <ContentList content={recommendedContent}></ContentList>
    </>
  )
}

export const getServerSideProps = async () => {
  const res = await fetch(`${server}/api/content`)
  const content = await res.json()

  return {
    props: {
      content
    }
  }
}