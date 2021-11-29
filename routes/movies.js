import express from "express";
const router = express.Router();
import {
  getAllMovies,
  getMoviesById,
  addNewMovie,
  deleteMovie,
  updateMovie,
} from "../helper.js";

router
  .route("/")
  .get(async function (req, res) {
    console.log(req.query);
    let filter = req.query;
    if (filter.imdb) {
      filter.imdb = +filter.imdb;
    }

    const filterMovies = await getAllMovies(filter);

    // let filterMovies = moviesID;

    console.log(filterMovies);
    // if (language) {
    //   filterMovies.filter((mv) => mv.language === language);
    // }

    // if (imdb) {
    //   filterMovies.filter((mv) => mv.imdb === +imdb);
    // }

    res.send(filterMovies);
  })
  .post(async function (req, res) {
    const data = req.body;
    console.log("data", data);

    const result = await addNewMovie(data);

    res.send(result);
  });

router
  .route("/:id")
  .get(async function (req, res) {
    console.log(req.params);
    const { id } = req.params;
    // const moviesID = movies.find((mv) => mv.id === id);

    const moviesID = await getMoviesById(id);

    const errMsg = { message: "No matching movie" };
    console.log(moviesID);
    if (moviesID === null) {
      res.status(404).send(errMsg);
    } else {
      res.send(moviesID);
    }
  })
  .delete(async function (req, res) {
    console.log(req.params);
    const { id } = req.params;
    // const moviesID = movies.find((mv) => mv.id === id);

    const moviesID = await deleteMovie(id);

    const errMsg = { message: "No matching movie" };
    console.log(moviesID);
    if (moviesID === null) {
      res.status(404).send(errMsg);
    } else {
      res.send(moviesID);
    }
  })
  .put(async function (req, res) {
    const { id } = req.params;
    const data = req.body;
    console.log("data", data);

    const result = await updateMovie(id, data);

    res.send(result);
  });

export const moviesRouter = router;
