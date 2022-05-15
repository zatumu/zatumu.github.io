import React, { useEffect } from "react";
import { useStaticQuery, Link, graphql } from "gatsby";

const GlobalNavigation = (props) => {
  const result = useStaticQuery(graphql`
    query {
      allMarkdownRemark(sort: { fields: frontmatter___posted, order: DESC }) {
        totalCount
        edges {
          node {
            id
            frontmatter {
              title
              posted(formatString: "DD MMMM, YYYY")
              slug
              tags
            }
          }
        }
      }
    }
  `);

  const posts = result.allMarkdownRemark.edges;
  const tagListTemp = [];

  posts.forEach((post) => {
    const tags = post.node.frontmatter.tags;
    tags.forEach((tag) => {
      tagListTemp.push(tag);
    });
  });
  //frontmatterのtagsをtagにバラしてtegListTempに全タグのリストををつくる

  const tagSet = new Set(tagListTemp);
  //Setを利用して重複を除外
  const tagList = Array.from(tagSet);
  //tagListを全タグの配列とする

  return (
    <nav>
      <Link href="/articles/">ブログ</Link>

      
    </nav>
  );
};
export default GlobalNavigation;
