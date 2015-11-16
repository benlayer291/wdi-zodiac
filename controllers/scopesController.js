var Hscope = require('../models/hscope');
var Sign = require('../models/sign');

//INDEX
function scopesIndex(req, res) {
  Hscope.find({}, function(err, scopes){
    if (err) return res.render('error', { message: "Uh Oh! Something went wrong! " + err });
    return res.render('scopes/index', { scopes: scopes});
  });
}

//SHOW
function scopesShow(req, res) {
  var scopeId = req.params.id;
  // var sign = Hscope.findById({ _id: scopeId });

  Hscope.findById({_id: scopeId }, function(err, scope){
    if (err) return res.render('error', { message: "Uh Oh! Something went wrong! " + err });
    return res.render('scopes/show', { scope: scope, sign: scope.sign });
  });
}

//CREATE
function scopesCreate(req, res) {
  var scopeInfo = req.body.hscope;
  var scope = new Scope(scopeInfo);

  scope.save(function(err){
    if (err) return res.render('error', { message: "Uh Oh! Something went wrong! " + err });
    return res.redirect('/scopes');
  });
}

//NEW
function scopesNew(req, res) {
  res.render('scopes/new');
}

//Update
function scopesUpdate(req, res) {
  var scopeId = req.params.id;
  var scopeInfo = req.body.hscope;

  Hscope.findByIdAndUpdate({_id: scopeId}, scopeInfo, function(err){
    if (err) return res.render('error', { message: "Uh Oh! Something went wrong! " + err });
    return res.redirect('/scopes');
  });
}

//Edit
function scopesEdit(req, res) {
  var scopeId = req.params.id;

  Hscope.findById({_id: scopeId}, function(err, scope) {
    if (err) return res.render('error', { message: "Uh Oh! Something went wrong! " + err });
    return res.render('signs/edit', { scope: scope });
  });
}

//Delete
function scopesDelete(req, res) {
  var scopeId = req.params.id;

  Hscope.remove({_id: scopeId}, function(err) {
    if (err) return res.render('error', { message: "Uh Oh! Something went wrong! " + err });
    return res.redirect('/scopes');
  });
}


var routeFunctions = {
  scopesIndex:  scopesIndex,
  scopesShow:   scopesShow,
  scopesCreate: scopesCreate,
  scopesNew:    scopesNew,
  scopesUpdate: scopesUpdate,
  scopesDelete: scopesDelete,
  scopesEdit:   scopesEdit
}

module.exports = routeFunctions