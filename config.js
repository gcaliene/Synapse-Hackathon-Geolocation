exports.DATABASE_URL =
	process.env.DATABASE_URL ||
	global.DATABASE_URL ||
	'mongodb://synapse:12345678@ds223609.mlab.com:23609/synapse-hackathon';

exports.PORT = process.env.PORT || 8080;
