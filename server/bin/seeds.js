/*jshint esversion: 6 */
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const bcryptSalt = 10;
const User = require("../models/User");
const Drink = require("../models/Drink");
const DrinksInBar = require("../models/DrinksInBar");
const Bar = require("../models/bar");

mongoose.connect("mongodb://localhost/cocktails");
const salt = bcrypt.genSaltSync(bcryptSalt);
const password = "ironhack";
const encryptedPass = bcrypt.hashSync(password, salt);

const user = {
  username: "gon",
  name: "Gonzalo",
  email: "mail@mail.com",
  password: encryptedPass
};

const drinks = [
  {
    name: "Bloody Mary",
    ingredients: ["vodka", "tomato juice", "slice of lemon", "tabasco"],
    bars: ["Cock", "Corazón", "De Diego"],
    placeOfOrigin: "USA"
  },
  {
    name: "Negroni",
    ingredients: ["gin", "martini rosso", "campari", "slice of orange"],
    bars: ["Cock", "Corazón", "De Diego"],
    placeOfOrigin: "Italy"
  },
  {
    name: "Dry Martini",
    ingredients: ["gin", "vermouth", "twist of lemon", "an olive"],
    bars: ["Cock", "Corazón", "De Diego"],
    placeOfOrigin: "USA"
  }
];

const bars = [
  {
    name: "Cock",
    longitude: "40.420142",
    latitude: "-3.698842"
  },
  {
    name: "De Diego",
    longitude: "40.420243",
    latitude: "-3.699286"
  },
  {
    name: "Bar Corazón",
    longitude: "40.423719",
    latitude: "-3.701422"
  }
];

User.create(user, (err, user) => {
  if (err) {
    throw err;
  }
  console.log(user);
});

Bar.create(bars)
  .then(bars => {
    Drink.create(drinks, (err, docs) => {
      if (err) {
        throw err;
      }
      drinks.forEach(drinks => {
        console.log(drinks.name);
      });
    });
  })
  .then(drinksInBars => {
    DrinksInBars.create(drinksInBars, (err, docs) => {
      if (err) {
        throw err;
      }
      drinksInBars.forEach(drinksInBars => {
        console.log(drinksInBars.name);
      });
      mongoose.connection.close();
    });
  });
