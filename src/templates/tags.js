import React from "react";
import { graphql} from "gatsby";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import BlogCard from "../components/BlogCard";

const TagPageTemplate = ({ data, pageContext, location}) => {
  const tagName = pageContext.slug;
  return(
    <Layout location={location}>
    <SEO/>
        <h1>{tagName}</h1>      <ul>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <BlogCard
            title={node.frontmatter.title}
            slug={node.frontmatter.slug}
          />
        ))}
      </ul>
    </Layout>
  )
};
export default TagPageTemplate

export const pageQuery = graphql`
{
  allMarkdownRemark(
    sort: { fields: [frontmatter___posted], order: DESC }
    limit: 1000
  ) {
    edges {
      node {
        frontmatter {
          posted(formatString: "YYYY-MM-DD")
          updated(formatString: "YYYY-MM-DD")
          slug
          title
          extract
          tags
        }
      }
    }
  }
}
`;
