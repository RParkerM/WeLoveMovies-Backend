const knex = require("../db/connection");
const reduceProperties = require("../utils/reduce-properties");
const reduceTheaters = reduceProperties("theater_id", {
  movie_id: ["movies", null, "movie_id"],
  title: ["movies", null, "title"],
  runtime_in_minutes: ["movies", null, "runtime_in_minutes"],
  rating: ["movies", null, "rating"],
  description: ["movies", null, "description"],
  image_url: ["movies", null, "image_url"],
  is_showing: ["movies", null, "is_showing"],
});

const table_name = "theaters";

function list(theater_id) {
  return knex(`${table_name} as t`)
    .select("t.*", "m.*", "mt.is_showing")
    .join("movies_theaters as mt", "t.theater_id", "mt.theater_id")
    .join("movies as m", "mt.movie_id", "t.theater_id")
    .then(reduceTheaters);
}

module.exports = { list };
