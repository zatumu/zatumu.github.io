import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import  "../../styles/style.css";

import * as styles from "./layout.module.css"

const Layout = (props) =>{
    return(
        <div className={styles.container}>
            <Header />
            <main className={styles.inner}>{props.children}</main>
            <Footer />
        </div>
    );
};

export default Layout;