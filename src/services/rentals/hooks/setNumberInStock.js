module.exports = function () {
  return async (context) => {
    const movieService = context.app.service("/movies");
    const movie = await movieService.get(context.data.movieId);
    context.data.movie = movie;
    context.data.movie.numberInStock = movie.numberInStock + 1;

    return context;
  };
};
