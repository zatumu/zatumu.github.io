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
    let button = document.getElementById("globalNavi--drawer--button");
    let drawer = document.getElementById("globalNavi--drawer");
    if (drawer.classList.contains("open") === true) {
      drawer.classList.remove("open");
      button.classList.remove("open");
    } else {
      drawer.classList.add("open");
      button.classList.add("open");
    }
  }

  return (
    <nav className="globalNavi">

      <form onSubmit={handleSubmit}  className="globalNavi--drawer--button--container">
        <button type="submit" id="globalNavi--drawer--button" className="globalNavi--drawer--button">
          
        </button>
      </form>

      <div id="globalNavi--drawer" className="globalNavi--drawer">
      <Link className="globalNavi--child" href="/articles/">ブログ</Link>
        <ul className="globalNavi--list">
        {
          tagList.map((tag) =>{
            return(
              <li className="globalNavi--list--child">
                <Link href={"/tags/" + tag}  className="globalNavi--drawer--link">
                {tag}
                </Link>
              </li>
            )
          })
        }
        </ul>
      </div>
      
    </nav>
  );
};
export default GlobalNavigation;
