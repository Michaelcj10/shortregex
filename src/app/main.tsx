/** @jsx createElement */
import { createElement, Fragment, lazy } from "react";
import { Suspense } from "react";
import { createGlobalStyle } from "styled-components";
import { Switch, Route } from "react-router-dom";

export const GlobalStyle = createGlobalStyle`
  body{
    font-family: sans-serif;
  }
`;

const Home = lazy(() => import("./home"));

function App() {
  return (
    <Fragment>
      <Suspense fallback={null}>
        <Switch>
          <Route exact={true} path="/" component={Home} />
        </Switch>
      </Suspense>
    </Fragment>
  );
}

export default App;
