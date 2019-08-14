import express from "express";
import App from "./dist/ssr/app";
import { StaticRouter } from "react-router";
import { renderToString } from "react-dom/server";
import React from "react";
const app = express();

app.use(express.static("dist"));
app.use("/images", express.static("images"));
app.get("*  ", (request, response) => {
  const html = renderToString(
    <StaticRouter
      location={request.url}
      context={{
        name: "kleiver"
      }}
    >
      <App />
    </StaticRouter>
  );
  response.write(`
  <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Platzi Video</title>
    <link rel="stylesheet" href="/css/app.css" />
  </head>
  <body>
    <div id="home-container">${html}</div>
    <div id="modal-container"></div>
    <script src="http://localhost:9000/js/app.js"></script>
     <script src="/js/app.js"></script>
  </body>
</html>
  `);
  response.end();
});
app.listen(3000);
console.log("encendido");
