import React, { useState, useEffect } from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Link } from "gatsby";
import * as styles from "./Search.module.css";
// import TextHighlighter from "./Highlighter";

const SearchResult = (props) => {
  const tempData = useStaticQuery(graphql`
    query SearchData {
      allMarkdownRemark(
        sort: { fields: [frontmatter___posted], order: DESC }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              posted(formatString: "YYYY-MM-DD")
              title
              slug
              extract
              tags
            }
          }
        }
      }
    }
  `);

  const [data, setData] = useState([]);

  useEffect(() => {
    const temp = [];
    tempData.allMarkdownRemark.edges.map((e) => {
      temp.push(e.node.frontmatter);
    });
    setData(temp);
  }, []);
  // eをfrontmatterを連結したデータとする

  //表示非表示の切り替え
  const [className, setClassName] = useState("");
  // 状態によって切り替える変数を宣言する（？）
  useEffect(() => {
    let id;
    if (props.focus && props.value !== "") {
      id = setTimeout(() => {
        setClassName("searchActive");
      }, 100);
    } else {
      id = setTimeout(() => {
        setClassName("search");
      }, 100);
    }
    return () => {
      clearTimeout(id);
    };
  }, [props.focus, props.value]);
  // 渡されたpropsのfocus・valueいずれかに文字列が含まれるか否かでclassを変更する

  //検索処理
  const [result, setResult] = useState([]);
  // 状態によって切り替える変数を宣言する（？）

  const search = () => {
    const value = props.value.toLowerCase();
    // 検索ワードの大文字を小文字に変換する
    const temp = data.filter((e) => {
      const target = `
      ${e.title.toLowerCase()}
      ${e.extract.toLowerCase()}
      ${e.tags.toString().toLowerCase()}
    `;

      return target.indexOf(value) !== -1;
    });

    setResult(temp);
  };

  useEffect(() => {
    if (props.value !== "") {
      search();
    }
  }, [props.value]);

  return (
    <div className={className}>
      <div className={styles.searchResult}>
        <span className="search--response">
          <b className="search--result--quantity">{result.length}</b>件ヒットしました
        </span>
        <ul className="search--list">
          {result.map((e) => {
            return (
              <li className="search--list--child" key={e.slug}>
                <Link
                className="search--list--link"
                to={`/post/${e.slug}/`}>
                  {/* <TextHighlighter
                    title={e.title}
                    extract={e.extract}
                    includes={props.value}
                  /> */}
                  <div className="search--list--child--inner">
                    <span className="search--list--title">{e.title}</span>
                    <br />
                    <span className="search--list--extract">{e.extract}</span>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

const Search = (props) => {
  const [focus, setFocus] = useState(false);
  const [value, setValue] = useState("");
  const onFocus = () => {
    setFocus(true);
  };
  const onBlur = () => {
    setFocus(false);
  };
  const onChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <div className="search--area" focus={focus}>
      <input
        className="search--input"
        type="text"
        onFocus={onFocus}
        onBlur={onBlur}
        onChange={onChange}
      />
      <SearchResult focus={focus} value={value} />
    </div>
  );
};
export default Search;
