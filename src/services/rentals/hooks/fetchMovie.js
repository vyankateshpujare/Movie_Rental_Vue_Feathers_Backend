module.exports = function () {
  return async (context) => {
    const movieService = context.app.service("/movies");
    const movie = await movieService.get(context.data.movieId);
    if (!movie) throw new Error("Movie not found");
    if (movie.numberInStock == 0) throw new Error("Movie out of stock");
    context.data.movie = movie;
    context.data.rentalFee = movie.dailyRentalRate * 5;
    context.data.movie.numberInStock = movie.numberInStock - 1;

    return context;
  };
};
