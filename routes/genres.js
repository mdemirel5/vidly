const express = require("express");
const routes = express();
const Joi = require("joi");

routes.use(express.json);

const genres = {
  id: 1,
  name: "Action",
  id: 2,
  name: "Horror",
  id: 3,
  name: "Comedy",
};

app.get("/api/genres", (req, res) => {
  res.send(genres);
});

app.get("/api/genres/:id", (req, res) => {
  const genre = genres.find(id === req.params.id);
  res.send(genres);
});

app.post("/api/genres", (req, res) => {
  const error = validateGenre(req.body).error;
  if (error) return res.status(400).send(error.details[0].message);

  const genre = {
    id: genres.length + 1,
    name: req.body.name,
  };

  genres.push(genre);
  req.send(genre);
});

function validateGenre(genre) {
  const schema = {
    name: Joi.string().min(3).required(),
  };

  return Joi.validate(genre, schema);
}
modules.export = routes;
