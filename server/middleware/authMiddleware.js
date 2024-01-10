const checkAuthentication = (req, res, next) => {
    if (req.isAuthenticated()) {
        // 사용자가 로그인되어 있으면 다음 미들웨어나 라우트로 이동
        next();
    } else {
        // 사용자가 로그인되어 있지 않으면 401 상태 코드 반환
        res.status(401).send('Not Authenticated');
    }
};

export { checkAuthentication };