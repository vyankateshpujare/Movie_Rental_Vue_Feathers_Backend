module.exports = function () {
  return async (context) => {
    const rentalService = context.app.service("/rentals");
    const rental = await rentalService.get(context.id);

    if (rental.dateIn !== null) {
      throw new Error("movie is already submitted ...");
    }
    return context;
  };
};
