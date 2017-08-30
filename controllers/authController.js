const passport = require('passport');

exports.login = passport.authenticate('local', {
  failureRedirect: '/login',
  failureFlash: 'failed login!',
  successRedirect: '/',
  successFlash: 'you are now logged in'
});

exports.logout = (req, res) => {
  req.logout();
  req.flash('success', 'you are now logged out');
  res.redirect('/');
};

exports.isLoggedIn = (req, res, next) => {
  if(req.isAuthenticated()){
    next();
    return;
  }
  req.flash('error', 'oops you must be looged in');
  res.redirect('/login');
};
