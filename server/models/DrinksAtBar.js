const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const drinksInBarSchema = new Schema({
  idBar: {
    type: Schema.Types.ObjectId,
    ref: "Bar"
  }, // hace referencia al modelo de bar
  idDrink: {
    type: Schema.Types.ObjectId,
    ref: "Drink"
  } // hace referencia al modelo de drink
  price: Number
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const DrinksInBar = mongoose.model('DrinksInBar', drinkInBarSchema);
module.exports = DrinksIn Bar;