import React from "react";
import { Link } from "gatsby";

// import * as styles from "./Header.module.css";
import { menu } from "./_Variables";
import { useSiteMetadata } from "./_Variables";

import Search from "./Search";
import GlobalNavigation from "./GlobalNavigation";

const Header = (props) => {
  const { title } = useSiteMetadata();
  return (
    <header className="header">
      <div className="header--inner">
        <h1 className="header--identity">
          <Link to="/">{title}</Link>
        </h1>
        <Search />
      </div>
      <GlobalNavigation />
    </header>
  );
};

export default Header;
