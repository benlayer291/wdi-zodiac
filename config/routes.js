//REQUIREMENTS
var express = require('express');
var router = express.Router();

var signsController = require('../controllers/signsController');

//ROUTE ACTIONS

//INDEX, CREATE
router.route('/signs')
  .get(signsController.signsIndex)
  .post(signsController.signsCreate)

//NEW
router.route('/signs/new')
  .get(signsController.signsNew)

//SHOW, UPDATE, DELETE
router.route('/signs/:id')
  .get(signsController.signsShow)
  .patch(signsController.signsUpdate)
  .delete(signsController.signsDelete)

//EDIT
router.route('/signs/:id/edit')
  .get(signsController.signsEdit)