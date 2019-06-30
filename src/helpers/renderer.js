import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { renderRoutes } from "react-router-config";
import { Helmet } from 'react-helmet'
// serialize accepts a string and escapes any characters involved in setting
// up script tags i.e. use to protect against xss attacks
import serialize from 'serialize-javascript'

import routes from "../client/routes";

export default (req, store, context) => {
  const { path } = req;

  //Static router has one prop called context. Gives us the ability to communicate from our rendered componends back to this renderer file
  // Another prop, location, is used for determining what components should be displayed based on the url

  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={path} context={context}>
        <div>{renderRoutes(routes)}</div>
      </StaticRouter>
    </Provider>
  );

  const helmet = Helmet.renderStatic()

  // Initial state is sent in the HTML using another set of script tags
  return `
    <html>
      <head>
      ${helmet.title.toString()}
      <link rel="stylesheet" href="style.css">
      <link rel="stylesheet" href="normalize.css">
      <link
      href="https://fonts.googleapis.com/css?family=Cabin|Roboto:700"
      rel="stylesheet"
    />
    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.6.0/css/all.css"
      integrity="sha384-aOkxzJ5uQz7WBObEZcHvV5JvRW3TUc2rNPA7pe3AwnsUohiw1Vj2Rgx2KSOkF5+h"
      crossorigin="anonymous"
    />
    <link
      rel="stylesheet"
      href="https://cdn.rawgit.com/konpa/devicon/df6431e323547add1b4cf45992913f15286456d3/devicon.min.css"
    />
      </head>
      <body>
      <div id="root">${content}</div>
        <script>
          window.INITIAL_STATE = ${serialize(store.getState())}
        </script>
        <script src="bundle.js"></script>
      </body>
    </html>
  `;
};
