const path = require(`path`);

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const TagPageTemplate = path.resolve(`./src/templates/tags.js`);
  const result = await graphql(
    `
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
    `
  );

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    throw result.errors;
  }

  const posts = result.data.allMarkdownRemark.edges;
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

  if (tagList.length !== 0) {
    tagList.forEach((tag) => {
      createPage({
        path: `/tags/${tag}/`,
        component: TagPageTemplate,
        context: {
          slug: tag,
        },
      });
    });
  }else{
    console.log(`空？`);
  }
};
