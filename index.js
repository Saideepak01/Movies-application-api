// const express = require("express"); old way f importing,  package.json file type: commonjs
import express from "express"; // new way package.json file type: module
import { MongoClient } from "mongodb";
import dotenv from "dotenv";
import { moviesRouter } from "./routes/movies.js";
import cors from "cors"
app.use(cors()); //3rd party middleware to give access to request from any origin

dotenv.config();

//dotenv puts all key value pairs in process.env  

const app = express();
const PORT = process.env.PORT || 9000;
const MONGO_URL = process.env.MONGO_URL;

async function createConnection() {
  const client = new MongoClient(MONGO_URL);
  await client.connect();
  console.log("Mongo DB connected");
  // const mov = await client
  //   .db("moviesDB")
  //   .collection("movies")
  //   .findOne({ id: "100" });
  // console.log(mov);
  return client;
}
// createConnection();
export const client = await createConnection();
app.use(express.json()); // parse body to json on all requests which is called middleware

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.use("/movies",moviesRouter);

app.listen(PORT, () => console.log("app is started"));


