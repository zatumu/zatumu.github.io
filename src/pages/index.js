import * as React from "react";
import { graphql } from "gatsby";

import SEO from "./components/SEO";
import Layout from "./components/Layout";
import IndexItem from "./components/IndexItem";

import * as style from "./index.module.css";

const indexPage = ({ data }) => {
  return (
    <Layout>
    <SEO/>
      <ul>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <IndexItem
            title={node.frontmatter.title}
            slug={node.frontmatter.slug}
          />
        ))}
      </ul>
    </Layout>
  );
};

export default indexPage;

export const query = graphql`
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
`;
