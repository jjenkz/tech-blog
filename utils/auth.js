// const withAuth = (req, res, next) => {
//   ///if user loggged in, continue with request, else redirect to login

//   if (!req.session.loggedIn) {
//     res.redirect("/login");
//   } else {
//     next();
//   }
// };

module.exports = {
  withAuth: (req, res, next) => {
    ///if user loggged in, continue with request, else redirect to login

    if (!req.session.loggedIn) {
      res.redirect("/login");
    } else {
      next();
    }
  },
};
