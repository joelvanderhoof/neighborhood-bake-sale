//exports to ..routes/auth.js
const exports = module.exports = {};

exports.signup = (req,res) => {
	res.redirect('/');
};

exports.signin = (req,res) => {
	res.redirect('/');
};

exports.home = (req,res) => {
	let userInfo = req.user;
  res.redirect('/');
};

exports.logout = (req,res) => {
  req.session.destroy((err) => {
  res.redirect('/');
  });
};