import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../../components/Layout";

// import MainImage from "../assets/test.svg";
// import MainImage from `../assets/${frontmatter.slug}.svg`;
// import MainImage from "../../../contents/images/sprite.svg";
import SEO from "../../components/SEO";
import * as styles from "./post.module.css";

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
  location,
}) {
  const { markdownRemark } = data; // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark;

  return (
    <Layout location={location}>
      <SEO title={frontmatter.title} description={frontmatter.extract} />
      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.title} id={styles.title}>
            {frontmatter.title}
          </h1>
          <aside className={styles.aside}>
            <time dateTime={frontmatter.posted} className={styles.postedTime}>
              {frontmatter.posted}
            </time>
            <time dateTime={frontmatter.updated} className={styles.updatedTime}>
              {frontmatter.updated}
            </time>
            {frontmatter.tags !== null ? (
              <ul className={styles.tags}>
                {frontmatter.tags.map((tag) => (
                  <li className={styles.tag}>{tag}</li>
                ))}
              </ul>
            ) : null}
          </aside>

          {/* 以下のメインイメージはコンポーネント化しよう */}
          {/* <figure className={styles.mainImage}>
            {frontmatter.illust ? (
              <svg className={styles.mainImageSvg}>
                <use
                  className={styles.mainImageSvgUse}
                  xlinkHref={MainImage + "#" + frontmatter.slug}
                />
              </svg>
            ) : frontmatter.mainPhoto ? (
              <img src={frontmatter.mainPhoto} alt="" />
            ) : (
              (
                <div class="noimage">no-image</div>
              )
            )}
            <figcaption className={styles.mainImageCaption}>
              {frontmatter.extract}
            </figcaption>
          </figure> */}
          
        </header>

        <div
          className={styles.content}
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </Layout>
  );
}
export const pageQuery = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        posted(formatString: "YYYY-MM-DD")
        updated(formatString: "YYYY-MM-DD")
        slug
        title
        extract
        tags
        mainPhoto
        illust
      }
    }
  }
`;
