import React, { useState, useEffect } from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Link } from "gatsby";
import TextHighlighter from "./Highlighter";

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

  //表示非表示の切り替え
  const [className, setClassName] = useState("");
  useEffect(() => {
    let id;
    if (props.focus && props.value !== "") {
      id = setTimeout(() => {
        setClassName("active");
      }, 100);
    } else {
      id = setTimeout(() => {
        setClassName("");
      }, 100);
    }
    return () => {
      clearTimeout(id);
    };
  }, [props.focus, props.value]);

  //検索処理
  const [result, setResult] = useState([]);

  if (typeof toLowerCase !== "undefined") {
    const search = () => {
      const value = props.value.toLowerCase();
      const temp = data.filter((e) => {
        const target = `
      ${e.title.toLowerCase()}
      ${e.extract.toLowerCase()}
    `;
        return target.indexOf(value) !== -1;
      });
      setResult(temp);
    };
  }

  useEffect(() => {
    if (props.value !== "") {
      search();
    }
  }, [props.value]);

  return (
    <div className={className}>
      <div className="resultInner">
        <span className="res">
          <b>{result.length}</b>件ヒットしました
        </span>
        <ul>
          {result.map((e) => {
            return (
              <li key={e.slug}>
                <Link to={`/${e.slug}/`}>
                  <TextHighlighter
                    title={e.title}
                    extract={e.extract}
                    includes={props.value}
                  />
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
    <div className={props.className} focus={focus}>
      <input
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
