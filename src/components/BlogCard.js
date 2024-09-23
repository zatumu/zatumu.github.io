import React from "react";
import { Link } from "gatsby";

import * as styles from "./BlogCard.module.css";
// import MainImage from "../../contents/images/sprite.svg";



const BlogCard = (props) => {
  
  return (
    <li>
      <Link href={`/articles/` + props.slug}>
        <figure>
          <svg>
            {/* <use xlinkHref={MainImage + "#" + props.slug} /> */}
          </svg>
        </figure>
        {props.title}
      </Link>
    </li>
  );
};

export default BlogCard;
