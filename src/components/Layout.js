import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "../styles/style.css";

const Layout = (props) => {
  const { location } = props;
  let isHome;
  const rootPath = `${__PATH_PREFIX__}/`;
  if (location.pathname === rootPath) {
    isHome = true;
  } else {
    isHome = false;
  }

  return (
    <div className={( "layout--container" ,isHome ? "isHome" : "notHome")}>
      <Header />
      <main className={"layout--inner"}>{props.children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
