import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import BlogCard from "../components/BlogCard";

const TagPageTemplate = ({ data, pageContext, location }) => {
  const {slug} = pageContext.slug;
  return (
    <Layout location={location}>
      <SEO />
      <h1>{slug}</h1>
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
export default TagPageTemplate;

export const pageQuery = graphql`
  query ($slug: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___posted], order: DESC }
      filter: { frontmatter: { tags: { in: [$slug] } } }
    ) {
      totalCount
      edges {
        node {
          frontmatter {
            title
            tags
            slug
          }
        }
      }
    }
  }
`;
