/*jshint esversion: 6 */
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const bcryptSalt = 10;
const User = require("../models/user");
const Drink = require("../models/drink");
const DrinksAtBar = require("../models/drinksAtBar");
const Bar = require("../models/bar");

mongoose.connect("mongodb://localhost/cocktails");
var salt = bcrypt.genSaltSync(bcryptSalt);
const password = "ironhack";
var encryptedPass = bcrypt.hashSync(password, salt);

const boss = new User({
  username: "gon",
  name: "Gonzalo",
  email: "mail@mail.com",
  password: encryptedPass
});
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
  },
];

// User.create(boss, (err, user) => {
//   if (err) {
//     throw err;
//   }
//   console.log(user);
// });

// Course.create(courses, (err, docs) => {
//   if (err) {
//     throw err;
//   }
//   docs.forEach(course => {
//     console.log(course.name);
//   });
//   mongoose.connection.close();
// });
