// const express = require("express"); old way f importing,  package.json file type: commonjs
import express from "express"; // new way package.json file type: module
import { MongoClient } from "mongodb";
import dotenv from "dotenv";
import { moviesRouter } from "./routes/movies.js";

dotenv.config();

//dotenv puts all key value pairs in process.env  

const app = express();
const PORT = 9000;
const MONGO_URL = process.env.MONGO_URL;
const movies = [
  {
    id: "100",
    name: "Interstellar",
    poster: "https://i.ytimg.com/vi/uaSYEUugnzE/movieposter_en.jpg",
    description:
      "When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans.",
    src: "https://www.youtube.com/embed/zSWdZVtXT7E",
    trailer: "https://www.youtube.com/embed/zSWdZVtXT7E",
    imdb: 8.6,
    language: "english",
  },
  {
    id: "101",
    name: "Inception",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMjExMjkwNTQ0Nl5BMl5BanBnXkFtZTcwNTY0OTk1Mw@@._V1_.jpg",
    description:
      "Cobb steals information from his targets by entering their dreams. Saito offers to wipe clean Cobb's criminal history as payment for performing an inception on his sick competitor's son.",
    src: "https://www.youtube.com/embed/Qwe6qXFTdgc",
    trailer: "https://www.youtube.com/embed/Qwe6qXFTdgc",
    imdb: 8.8,
    language: "english",
  },
  {
    id: "102",
    name: "Dunkirk",
    poster: "https://m.media-amazon.com/images/I/91a9Ez60pmL._AC_SL1500_.jpg",
    description:
      "During World War II, soldiers from the British Empire, Belgium and France try to evacuate from the town of Dunkirk during a arduous battle with German forces.",
    src: "https://www.youtube.com/embed/F-eMt3SrfFU",
    imdb: 7.8,
    language: "english",
  },
  {
    id: "103",
    name: "Tenet",
    poster:
      "https://m.media-amazon.com/images/M/MV5BNDhiODUyN2UtYTQzZi00YTE0LWJiMWEtYTVlODEyZDQwYzRhXkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_.jpg",
    description:
      "When a few objects that can be manipulated and used as weapons in the future fall into the wrong hands, a CIA operative, known as the Protagonist, must save the world.",
    src: "https://www.youtube.com/embed/AZGcmvrTX9M",
    imdb: 7.4,
    language: "telugu",
  },
  {
    id: "104",
    name: "Free guy",
    poster:
      "https://m.media-amazon.com/images/M/MV5BOTY2NzFjODctOWUzMC00MGZhLTlhNjMtM2Y2ODBiNGY1ZWRiXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg",
    description:
      "When a bank teller discovers he's actually a background player in an open-world video game, he decides to become the hero of his own story -- one that he can rewrite himself. In a world where there's no limits, he's determined to save the day his way before it's too late, and maybe find a little romance with the coder who conceived him.",
    src: "https://www.youtube.com/embed/X2m-08cOAbc",
    imdb: 7.2,
    language: "tamil",
  },
];

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


