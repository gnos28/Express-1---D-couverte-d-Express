// Express is already installed
const express = require("express");
const app = express();

// Array of movies
const movies = require("./movies");
// In codesandbox we need to use the default port which is 8080
const port = 8080;

app.listen(port, (err) => {
  if (err) {
    console.error("Something bad happened");
  } else {
    console.log(`Server is listening on ${port}`);
  }
});

app.get("/", (req, res) => {
  res.send("Welcome to my favourite movie list");
});

app.get("/api/movies", (req, res) => {
  res.status(200).json(movies);
});

app.get("/api/movies/:id", (req, res) => {
  const id = parseInt(req.params.id, 10);

  const filteredMovies = movies.filter((movie) => movie.id === id);

  if (filteredMovies.length > 0) res.status(200).json(filteredMovies);
  else res.status(404).send("Not Found :(((");
});
