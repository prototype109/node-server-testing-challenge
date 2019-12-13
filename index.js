const server = require("./api/server");

server.listen(process.env.PORT || 5000, () => {
  console.log(
    `server listening on http://localhost:${process.env.PORT || 5000}`
  );
});
