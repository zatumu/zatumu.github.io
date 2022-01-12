import React from "react";
import { Link } from "gatsby";

import * as styles from "./IndexItem.module.css";
import MainImage from "../../../contents/images/sprite.svg";

const indexItem = (props) => {
  return (
    <li>
      <Link href={`./post/` + props.slug}>
        <figure>
          <svg>
            <use xlinkHref={MainImage + "#" + props.slug} />
          </svg>
        </figure>
        {props.title}
      </Link>
    </li>
  );
};

export default indexItem;
