module.exports = function () {
  return async (context) => {
    const genreService = context.app.service("/genre");
    const genre = await genreService.get(context.data.genreId);
    if (!genre) throw new error("Genre with given ID not found");
    context.data.genre = genre;
    return context;
  };
};
