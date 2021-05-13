/** @jsx createElement */
import { createElement, Fragment, lazy, Suspense } from "react";
import { createGlobalStyle } from "styled-components";
import { Switch, Route } from "react-router-dom";

export const GlobalStyle = createGlobalStyle`
  body{
    font-family: sans-serif;
    margin: auto;
    padding: 32px 16px;
    max-width: 800px;
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
