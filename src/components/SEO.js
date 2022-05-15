import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

const SEO = ({ lang, meta, title, pageDescription }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            social {
              twitter
            }
          }
        }
      }
    `
  );
  // const {defaultTitle, defaultDescription}=site.siteMetadata

  const seo = {
    // title: title ? `${title}/${defaultTitle}`: defaultTitle,
    siteTitle: site.siteMetadata?.title,
    description: pageDescription || site.siteMetadata.description,
  };

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={seo.siteTitle}
      titleTemplate={title ? `${title}/%s` : seo.siteTitle}
      meta={[
        { name: `description`, content: seo.description },
        {
          property: "og:title",
          content: title,
        },
        {
          property: `og:discriptiom`,
          content: seo.description,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.social.twitter || ``,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: seo.description,
        },
      ].concat(meta)}
    />
  );
};

SEO.defaultProps = {
  lang: `ja`,
  meta: [],
  description: '',
};

export default SEO;
