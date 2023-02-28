import React from "react";
import classes from "./MainNavigation.module.css";

export const MainNavigation = () => {
  return (
    <div className={classes.head}>
      <header className={classes.header}>
        <h1>MyWebBlog</h1>
        <h3>Home</h3>
        <h3>Products</h3>
        <h3>About Us</h3>
      </header>
    </div>
  );
};
