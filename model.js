const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(process.env.DBPASSWORD);

const PetSchema = new mongoose.Schema({
  name: String,
  breed: String,
  species: String,
  age: Number,
  gender: String,
});

const ApSchema = new mongoose.Schema({
  name: String,
  phone: String,
  email: String,
  petId: String,
});

const Pet = mongoose.model("Pet", PetSchema);
const Application = mongoose.model("Application", ApSchema);

module.exports = {
  Pet,
  Application,
};
