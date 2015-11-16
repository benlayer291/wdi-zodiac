var Hscope = require('../models/hscope');

//INDEX
function scopesIndex(req, res) {
  Sign.find({}, function(err, scopes){
    if (err) return res.render('error', { message: "Uh Oh! Something went wrong! " + err });
    return res.render('scopes/index', { scopes: scopes});
  });
}

//SHOW
function scopesShow(req, res) {
  var scopeId = req.params.id;

  Scope.findById({_id: scopeId }, function(err, scope){
    if (err) return res.render('error', { message: "Uh Oh! Something went wrong! " + err });
    return res.render('scope/show', { scope: scope });
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
  var signInfo = req.body.hscope;

  Sign.findByIdAndUpdate({_id: scopeId}, scopeInfo, function(err){
    if (err) return res.render('error', { message: "Uh Oh! Something went wrong! " + err });
    return res.redirect('/scopes');
  });
}

//Edit
function scopesEdit(req, res) {
  var scopeId = req.params.id;

  Scope.findById({_id: scopeId}, function(err, scope) {
    if (err) return res.render('error', { message: "Uh Oh! Something went wrong! " + err });
    return res.render('signs/edit', { scope: scope });
  });
}

//Delete
function scopesDelete(req, res) {
  var scopeId = req.params.id;

  Scope.remove({_id: scopeId}, function(err) {
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