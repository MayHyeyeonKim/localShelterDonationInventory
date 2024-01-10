const checkAuthentication = (req, res, next) => {
    if (req.isAuthenticated()) {
        next();
    } else {
        res.status(401).send('Not Authenticated');
    }
};

export { checkAuthentication };