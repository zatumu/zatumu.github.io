import React, { useState } from "react";
import { Link } from "gatsby";
import { useStaticQuery, graphql } from "gatsby";

import IndexItem from "./IndexItem";

import * as styles from "./Modal.module.css";

const Modal = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        totalCount
        edges {
          node {
            id
            frontmatter {
              title
              posted(formatString: "DD MMMM, YYYY")
              slug
            }
          }
        }
      }
    }
  `);

  // テスト
  // useStateを調べる（state）
  const [count, setCount] = React.useState(0);
  const [test, setTest] = React.useState("アクティブ");

  // function testtest(props){
  //   const count = props.count;
  //   if(count % 2 == 0){
  //     setTest(test = "ブィテクア")
  //   }{
  //     setTest(test = "アクティブ")
  //   }
  // }


  return (
    <div className={styles.container}>
      <div className={styles.button} onClick={() => setCount(count + 1)}>
        {count}
      </div>
      {/* <div onClick={testtest(count)}>
        {test}
      </div> */}
      <nav className={styles.contentsList}>
        <ul>
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <IndexItem
              title={node.frontmatter.title}
              slug={node.frontmatter.slug}
            />
          ))}
        </ul>
      </nav>
      <div className={styles.contentsListBackground}>背景</div>
    </div>
  );
};

export default Modal;
