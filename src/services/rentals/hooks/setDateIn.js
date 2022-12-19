module.exports = function () {
  return async (context) => {
    context.data.dateIn = Date.now();

    return context;
  };
};
