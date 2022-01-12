import React from "react";
import { Link } from "gatsby";

import * as styles from "./Header.module.css";
import { menu } from "./_Variables";
import Search from "./Search";
import Modal from "./Modal";

const Header = () => {
  return (
    <header className={styles.container}>
      <div className={styles.inner}>
        <h1 className={styles.siteName}>
          <Link to="/">Header</Link>
        </h1>
        <Search />
        <Modal />
      </div>
    </header>
  );
};

export default Header;
