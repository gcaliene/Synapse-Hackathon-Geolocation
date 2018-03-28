const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

//Schema for all resources available to those looking for help
const LocationSchema = mongoose.Schema({
  name: { type: String, required: true },
  createdAt: { type: Date, required: false, default: new Date() },
  address: { type: String, required: true },
  location: { type: String, required: true },
  times: { type: String, required: true },
  days: { type: String, required: false },
  other: { type: String, required: false }
});

const Location = mongoose.model('Location', LocationSchema);

module.exports = { Location };
