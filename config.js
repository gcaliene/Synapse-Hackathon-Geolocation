exports.DATABASE_URL =
  process.env.MONGODB_URI ||
  global.MONGO_URI ||
  'mongodb://synapse:12345678@ds223609.mlab.com:23609/synapse-hackathon';

exports.PORT = process.env.PORT || 8080;
