import { graphql, useStaticQuery } from "gatsby"

export const name = "ざつむ";
// export const menu ={
//     "about":"このブログについて",
//     "want":"ほしいもの"
// };
export const menu = {
  about: "このブログについて",
  want: "ほしいもの",
};

export const useSiteMetadata = () =>{
  const { site } = useStaticQuery(
    graphql`
    query{
      site{
        siteMetadata{
          title
          subtitle
        }
      }
    }
    `
  )
  return site.siteMetadata
}
