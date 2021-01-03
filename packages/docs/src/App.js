import { defaultTheme } from "@re-flex/ui";
import React, { Suspense } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import DocumentationProvider from "./docz";
import Routes from "./Router";

const isDev = process.env.NODE_ENV === "development" ? true : false;

export default () => {
  return (
    <BrowserRouter basename={isDev ? "" : "reflex"}>
      <DocumentationProvider theme={defaultTheme}>
        {Object.entries(Routes).map(([path, Component], key) => (
          <Route
            key={key}
            path={path}
            exact={path === "/" ? true : false}
            render={() => (
              <Suspense fallback={<div>Loading...</div>}>
                <Component />
              </Suspense>
            )}
          />
        ))}
      </DocumentationProvider>
    </BrowserRouter>
  );
};
