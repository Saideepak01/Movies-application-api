import { client } from "./index.js";

async function updateMovie(id, data) {
  return await client
    .db("moviesDB")
    .collection("movies")
    .updateOne({ id: id }, { $set: data });
}
async function deleteMovie(id) {
  return await client.db("moviesDB").collection("movies").deleteOne({ id: id });
}
async function addNewMovie(data) {
  return await client.db("moviesDB").collection("movies").insertMany(data);
}
async function getMoviesById(id) {
  return await client.db("moviesDB").collection("movies").findOne({ id: id });
}
async function getAllMovies(filter) {
  return await client
    .db("moviesDB")
    .collection("movies")
    .find(filter)
    .toArray();
}

export { getAllMovies, getMoviesById, addNewMovie, deleteMovie, updateMovie };
