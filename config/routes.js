//REQUIREMENTS
var express = require('express');
var router = express.Router();

var signsController = require('../controllers/signsController');

var scopesController = require('../controllers/scopesController');

//ROUTE ACTIONS

//ROOT
router.get('/', function(req, res){
  res.redirect('/signs');
})

//INDEX, CREATE
router.route('/signs')
  .get(signsController.signsIndex)
  .post(signsController.signsCreate)

router.route('/scopes')
  .get(scopesController.scopesIndex)
  .post(scopesController.scopesCreate)

//NEW
router.route('/signs/new')
  .get(signsController.signsNew)

router.route('/scopes/new')
  .get(scopesController.scopesNew)

//SHOW, UPDATE, DELETE
router.route('/signs/:id')
  .get(signsController.signsShow)
  .patch(signsController.signsUpdate)
  .delete(signsController.signsDelete)

router.route('/scopes/:id')
  .get(scopesController.scopesShow)
  .patch(scopesController.scopesUpdate)
  .delete(scopesController.scopesDelete)

//EDIT
router.route('/signs/:id/edit')
  .get(signsController.signsEdit)

router.route('/scopes/:id/edit')
  .get(scopesController.scopesEdit)

module.exports = router;