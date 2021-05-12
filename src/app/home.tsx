/** @jsx createElement */
import { createElement, Fragment } from "react";
import Landing from "../components/landing/landing";
import { GlobalStyle } from "./main";
import Header from "../components/header/header";

function Home() {
  return (
    <Fragment>
      <Header />
      <Landing />
      <GlobalStyle />
    </Fragment>
  );
}

export default Home;
