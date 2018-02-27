const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const drinksAtBarSchema = new Schema({
  idBar: String, // falta que haga referencia al modelo de bar
  idDrink: String, // falta que haga referencia al modelo de drink
  price: Number
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const DrinksAtBar = mongoose.model('DrinksAtBar', drinkSchema);
module.exports = DrinksAtBar;