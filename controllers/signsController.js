var Sign = require('../models/sign');

//INDEX
function signsIndex(req, res) {
  Sign.find({}, function(err, signs){
    if (err) return res.render('error', { message: "Uh Oh! Something went wrong! " + err });
    return res.render('signs/index', { signs: signs});
  });
}

//SHOW
function signsShow(req, res) {
  var signId = req.params.id;

  Sign.findById({_id: signId }, function(err, sign){
    if (err) return res.render('error', { message: "Uh Oh! Something went wrong! " + err });
    return res.render('signs/show', { sign: sign });
  });
}

//CREATE
function signsCreate(req, res) {
  var signInfo = req.body.sign;
  var sign = new Sign(signInfo);

  sign.save(function(err){
    if (err) return res.render('error', { message: "Uh Oh! Something went wrong! " + err });
    return res.redirect('/signs');
  });
}

//NEW
function signsNew(req, res) {
  res.render('signs/new');
}

//Update
function signsUpdate(req, res) {
  var signId = req.params.id;
  var signInfo = req.body.sign;

  Sign.findByIdAndUpdate({_id: signId}, signInfo, function(err){
    if (err) return res.render('error', { message: "Uh Oh! Something went wrong! " + err });
    return res.redirect('/signs');
  });
}

//Edit
function signsEdit(req, res) {
  var signId = req.params.id;

  Sign.findById({_id: id}, function(err, sign) {
    if (err) return res.render('error', { message: "Uh Oh! Something went wrong! " + err });
    return res.render('signs/edit', { sign: sign });
  });
}

//Delete
function signsDelete(req, res) {
  var signId = req.params.id:

  Sign.remove({_id: signId}, function(err) {
    if (err) return res.render('error', { message: "Uh Oh! Something went wrong! " + err });
    return res.redirect('/signs');
  });
}


var routeFunctions = {
  signsIndex:  signsIndex,
  signsShow:   signsShow,
  signsCreate: signsCreate,
  signsNew:    signsNew,
  signsUpdate: signsUpdate,
  signsDelete: signsDelete,
  signsEdit:   signsEdit
}

module.exports = routeFunctions