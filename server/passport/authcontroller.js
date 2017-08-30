//exports to ..routes/auth.js
var exports = module.exports = {};

exports.signup = function(req,res){
	res.redirect('/signup');
};

exports.login = function(req,res){
	res.redirect('/login');
};

exports.home = function(req,res){
  res.redirect('/');
};

exports.logout = function(req,res){
  req.session.destroy(function(err) {
  res.redirect('/');
  });
};