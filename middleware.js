module.exports.isLoggedIn = (req, res, next) => {
    console.log("REQ.USER...", req.user);
    if (!req.isAuthenticated()) {
        //store the url use is requesting
        req.session.returnTo = req.originalUrl;
        
        req.flash('error', 'You must be signed in first');
        return res.redirect('/login');
    }
    next();
} 