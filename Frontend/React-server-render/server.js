import express from "express";
import React from "react";
import ReactDOMServer from "react-dom/server";
import App from "./pages/App";

const app = express();
app.use(express.static("public"));

const html = ReactDOMServer.renderToString(<App />);

app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>React Server Render Sample</title>
      </head>
      <body>
        <div id="root">${html}</div>
        <script src="/client.bundle.js"></script>
      </body>
    </html>
  `);
});

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
