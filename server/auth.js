const jwt = require('./jwt')
const authCookieName = 'userCookie'

module.exports = (redirectAuthenticated = true) => {
  return function (req, res, next) {
    const token = req.cookies[authCookieName] || ''
            jwt.verifyToken(token)
      .catch(err => {
        if (!redirectAuthenticated) { next(); return }
        if (['token expired', 'blacklisted token', 'jwt must be provided'].includes(err.message)) {
          res.status(401).send('UNAUTHORIZED!')
                    return;
        }
        next(err)
            })
  }
}
