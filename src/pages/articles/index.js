import * as React from "react";
import { graphql } from "gatsby";

import SEO from "../../components/SEO";
import Layout from "../../components/Layout";
import BlogCard from "../../components/BlogCard";

import * as style from "./index.module.css";

const indexPage = ({ data, location }) => {
  return (
    <Layout location={location}>
    <SEO/>
      <ul>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <BlogCard
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
    allMarkdownRemark(sort: {fields: frontmatter___posted, order: DESC})  {
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
