const express = require("express");
const model = require("./model");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));

app.use(express.static("frontend"));

app.get("/pets", async (req, res) => {
  try {
    const pets = await model.Pet.find();
    res.status(200).json(pets);
  } catch (error) {
    res.status(404).json("Error :" + error);
  }
});
app.post("/pets", async (req, res) => {
  const data = req.body;
  try {
    console.log("hi");
    let newPet = new model.Pet({
      name: data.name,
      breed: data.breed,
      species: data.species,
      age: data.age,
      gender: data.gender,
    });
    console.log(newPet);
    console.log("hi2");
    let error = newPet.validateSync();
    if (error) {
      res.status(400).json(error);
      return;
    }
    await newPet.save();
    res.status(201).json(newPet);
  } catch (error) {
    res.status(400).send("Generic Error");
  }
});

app.delete("/pets/:id", async (req, res) => {
  try {
    let isDeleted = await model.Pet.findByIdAndDelete({
      _id: req.params.id,
    });
    if (!isDeleted) {
      res.status(404).send("could not find pet");
      return;
    }
    res.status(204).send("pet deleted");
  } catch (error) {
    response.status(400).send("Generic error");
  }
});

app.get("/applications", async (req, res) => {
  try {
    const applications = await model.Application.find();
    res.status(200).json(applications);
  } catch (error) {
    res.status(404).send("Generic Error");
  }
});
app.post("/applications", async function (req, res) {
  const data = req.body;
  try {
    let newApplication = new model.Application({
      name: data.name,
      phone: data.phone,
      email: data.email,
      petId: data.petId,
    });
    console.log(newApplication);
    let error = newApplication.validateSync();
    if (error) {
      res.status(400).json(newApplication);
      return;
    }
    await newApplication.save();
    console.log("hi");
    res.status(201).json(newApplication);
  } catch (error) {
    res.status(404).send("Generic Error");
  }
});

app.delete("/applications/:id", async (req, res) => {
  try {
    console.log("hi1");
    let isDeleted = await model.Application.findByIdAndDelete({
      _id: req.params.id,
    });
    console.log("hi2");
    if (!isDeleted) {
      res.status(404).send("Could not find Application");
      return;
    }
    console.log("hi3");
    res.status(204).send("Application deleted");
    console.log("hi4");
  } catch (error) {
    res.status(400).send("Generic Error");
  }
});

app.listen(PORT, () => {
  console.log(`Server running: http://localhost:${PORT}`);
});
