import * as React from "react";
import { graphql } from "gatsby";

import SEO from "../components/SEO";
import Layout from "../components/Layout";

import * as style from "./index.module.css";

import mainVisual from "../../contents/images/mainVisual.jpg";

const indexPage = ({ data, location }) => {
  return (
    <Layout location={location}>
    <SEO/>
    <div className="mainVisual">
      <img src={mainVisual} alt="" className="mainVisual--imaga" />
    </div>
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
