const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const barSchema = new Schema({
  name: String,
  longitude: String,
  latitude: String
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const Bar = mongoose.model('Bar', barSchema);
module.exports = Bar;