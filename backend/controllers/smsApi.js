const express = require('express');
const bodyParser = require('body-parser');
//const config = require('../config/config');
//const VerifyToken = require('../modules/VerifyToken');
//const models  = require('../models');
const sequelize = require('sequelize');
const Op = sequelize.Op;
const router = express.Router();

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

router.get("/list", (req, res) => {
  return res.status(200).send({"status": 200, "data": [{'value':null}], "msg": "OK"});
});

module.exports = router;