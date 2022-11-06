import React from "react";
import { Link } from "gatsby";

import * as styles from "./Header.module.css";
import { menu } from "./_Variables";
import { useSiteMetadata } from "./_Variables";
import Search from "./Search";
import GlobalNavigation from "./GlobalNavigation";


const Header = (props) => {
  const { title } = useSiteMetadata();
  return (
    <header className={styles.container}>
      <div className={styles.inner}>
        <h1 className={styles.siteName}>
          <Link to="/">
            {title}
          </Link>
        </h1>
        <Search />
        <GlobalNavigation />
      </div>
    </header>
  );
};

export default Header;
