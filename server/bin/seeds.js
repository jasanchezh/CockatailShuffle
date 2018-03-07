/*jshint esversion: 6 */
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const bcryptSalt = 10;
const User = require("../models/User");
const Drink = require("../models/Drink");
const DrinksInBar = require("../models/DrinksInBar");
const Bar = require("../models/bar");
const mongodb = "mongodb://karlsanm:IronHack35%@ds251988.mlab.com:51988/cocktail-shuffle";

const salt = bcrypt.genSaltSync(bcryptSalt);
const password = "ironhack";
const encryptedPass = bcrypt.hashSync(password, salt);

mongoose.connect("mongodb://karlsanm:IronHack35%@ds251988.mlab.com:51988/cocktail-shuffle")
    .then(() => console.log("Conectado"))
    .catch(e => console.log(e));

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
    placeOfOrigin: "USA"
  },
  {
    name: "Negroni",
    ingredients: ["gin", "martini rosso", "campari", "slice of orange"],
    placeOfOrigin: "Italy"
  },
  {
    name: "Dry Martini",
    ingredients: ["gin", "vermouth", "twist of lemon", "an olive"],
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

User.collection.drop();
Bar.collection.drop();
Drink.collection.drop();
DrinksInBar.collection.drop();

User.create(user, (err, user) => {
  if (err) {
    throw err;
  }
  console.log(user);
});

Bar.create(bars)
  .then(createdBars => {
    Drink.create(drinks)
    .then(createdDrinks => {
      let drinksInBar = []
      createdBars.forEach((bar, i) => {
        drinksInBar.push({
          idBar: bar._id,
          idDrink: createdDrinks[i]._id,
          price: 5
        })
      })
      console.log(drinksInBarqq)
      DrinksInBar.create(drinksInBar)
    })
  })
  .catch(err => console.log('Error al guardar'))