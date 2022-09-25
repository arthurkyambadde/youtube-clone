// const http = require("http");

const express = require("express");
const app = express();

let notes = [
  {
    id: 1,
    content: "HTML is easy",
    date: "2022-05-30T17:30:31.098Z",
    important: true,
  },
  {
    id: 2,
    content: "Browser can execute only Javascript",
    date: "2022-05-30T18:39:34.091Z",
    important: false,
  },
  {
    id: 3,
    content: "GET and POST are the most important methods of HTTP protocol",
    date: "2022-05-30T19:20:14.298Z",
    important: true,
  },
];

// const app = http.createServer((req, res) => {
//   res.writeHead(200, { "content-Type": "application/json" });
//   res.end(JSON.stringify(notes));
// });

app.get("/", (request, response) => {
  response.send("<h1>Hello,  Arthur😄 </h1>");

  app.get("/api/notes", (request, response) => {
    response.json(notes);
  });
});

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
