const express = require("express");

const port = 3000;

const routes = [
  {
    method: "GET",
    route: "/categories",
    reply: [{ id: 1, title: "Category1" }],
    status: 200,
  },
  {
    method: "POST",
    route: "/v2/documents/new",
    reply: {
      error_type: "document_action_forbidden",
      error_message:
        "You do not have enough document tokens to perform this action on the document.",
      http_code: 403,
      error_details: null,
    },
    status: 403,
  },
];

function createApp() {
  const app = express();
  routes.forEach((route) => {
    app.all(route.route, (req, res) => {
      if (route.method === "GET" && req.method === "GET") {
        res.status(route.status).json(route.reply).end();
      }
      if (route.method === "POST" && req.method === "POST") {
        res.status(route.status).json(route.reply).end();
      }
    });
  });
  return app;
}

const app = createApp();

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
