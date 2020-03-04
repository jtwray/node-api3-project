const { findBy } = require('../../api/landOwner/landOwner-model.js')

module.exports = (req, res, next) => {
  const { username, email } = req.body
  username !== undefined &&
    findBy({ username: username })
      .then(user => {
        if (user.length) {
          console.log('user', user)
          res.status(400).json({
            message: `Sorry. That username: ' ${username} ' has been taken. Please choose another.`
          })
        } else {
          //   email !== undefined &&
          //     findBy({ email: email })
          //       .then(user => {
          //         if (user.length) {
          //           res.status(400).json({
          //             message:
          //               `Sorry. That email: ' ${email} ' has been taken. Please choose another.`
          //           })
          // else 
          next()
        }
      })
      .catch(err =>
        res.status(500).json({
          message:
            `Sorry. Something went wrong when validating this is a unique email.----${console.error(err)}----`,
          error: err,
          error_mesage: err.message
        })
      )
}
      })
      .catch (err =>
res.status(500).json({
  message:
    'Sorry. Something went wrong when validating this is a unique username.',
  error: err,
  error_mesage: err.message
})
      )
}
