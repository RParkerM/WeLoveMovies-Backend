This is a project that I completed for my Software Engineering Program in Thinkful.
I wrote the database queries using Knex, as well as the express architecture.

Technologies used: Node.js, Express, Knex.js, PostgreSql.

This API server expresses the following endpoints:

## /movies Route

### GET (optional param is_showing)
Returns a list of movies in the following format:
```{
  "data": [
    {
      "id": 1,
      "title": "Spirited Away",
      "runtime_in_minutes": 125,
      "rating": "PG",
      "description": "Chihiro ...",
      "image_url": "https://imdb-api.com/..."
    }
    // ...
  ]
}
```

If specified as `GET /movies?is_showing=true`, the route only returns those movies where the movie is currently showing in theaters.
