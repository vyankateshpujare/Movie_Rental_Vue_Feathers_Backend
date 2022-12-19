module.exports = function () {
  return async (context) => {
    const customerService = context.app.service("/customers");
    const customer = await customerService.get(context.data.customerId);
    if (!customer) throw new Error("Customer not found");
    context.data.customer = customer;
    return context;
  };
};
