import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { renderRoutes } from "react-router-config";

import Routes from "../client/Routes";

export default (req, store, context) => {
  const { path } = req;

  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={path} context={context}>
        <div>{renderRoutes(Routes)}</div>
      </StaticRouter>
    </Provider>
  );
  return `
    <html>
      <head>
        <title> Test </title>
      </head>
      <body>
      <div id="root">${content}</div>
        <script src="bundle.js"></script>
      </body>
    </html>
  `;
};
