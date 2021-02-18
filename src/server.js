const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const genericErrorHandler = require("./errorHandler");

const articleRoute = require("./articles");
const authorRoute = require("./authors");

const server = express();
const port = process.env.PORT;

server.use(cors());
server.use(express.json());

server.use("/articles", articleRoute);
server.use("/authors", authorRoute);

server.use(genericErrorHandler);

mongoose
  .connect(process.env.MONGO_ATLAS, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(
    server.listen(port, () => {
      console.log("The server's power level is over ", port);
    })
  );
