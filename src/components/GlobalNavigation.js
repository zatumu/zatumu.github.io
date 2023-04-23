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

  // 多分タグリストを作りたかったんだと思う（がんばれ！）

  function handleSubmit(e) {
    e.preventDefault();
    console.log("You clicked submit.");
    let button = document.getElementById("button");
    if (button.classList.contains("open") == true) {
      button.classList.remove("open");
    } else {
      button.classList.add("open");
    }
  }

  return (
    <nav className="grobalNavi">
      <Link className="grobalNavi--child" href="/articles/">ブログ</Link>

      <form onSubmit={handleSubmit}>
        <button type="submit" id="button">
          Submit
        </button>
      </form>
      <div>
        {
          tagList.map((tag) =>{
            return(
              <div>
                <Link href={"/tags/" + tag}>
                {tag}
                </Link>
              </div>
            )
          })
        }

      </div>
    </nav>
  );
};
export default GlobalNavigation;
