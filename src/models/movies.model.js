// movies-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html

const genreSchema = require("./genreSchema");

// for more of what you can do here.
module.exports = function (app) {
  const modelName = "movies";
  const mongooseClient = app.get("mongooseClient");
  const { Schema } = mongooseClient;
  const schema = new Schema(
    {
      title: {
        type: String,
        required: true,
      },
      genre: {
        type: genreSchema(app),
        required: true,
      },
      dailyRentalRate: {
        type: Number,
        required: true,
      },
      numberInStock: {
        type: Number,
        required: true,
      },
    },
    {
      timestamps: true,
    }
  );

  // This is necessary to avoid model compilation errors in watch mode
  // see https://mongoosejs.com/docs/api/connection.html#connection_Connection-deleteModel
  if (mongooseClient.modelNames().includes(modelName)) {
    mongooseClient.deleteModel(modelName);
  }
  return mongooseClient.model(modelName, schema);
};
