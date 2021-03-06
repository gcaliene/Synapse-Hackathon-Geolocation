'use strict';

const express = require('express');
const bodyParser = require('body-parser');

const { Location } = require('./models');
const router = express.Router();

const jsonParser = bodyParser.json();

router.post('/', (req, res) => {
  console.log(req.body);
  const mealSitePartner = new Location({
    name: req.body.name,
    createdAt: req.body.createdAt,
    address: req.body.address,
    location: req.body.location,
    times: req.body.times,
    days: req.body.days,
    other: req.body.other
  });
  mealSitePartner.save((err, mealSitePartner) => {
    if (err) {
      res.send(err);
    } else {
      Location.find((err, data) => {
        if (err) {
          res.send(err);
        } else {
          res.json(data);
          console.log('====');
          console.log(data);
        }
      });
    }
  });
});

router.get('/', (req, res) => {
  Location.find().then(
    mealSitePartners => {
      res.send({ mealSitePartners });
    },
    e => {
      res.status(400).send(e.errors.text.message);
    }
  );
});

module.exports = { router };
