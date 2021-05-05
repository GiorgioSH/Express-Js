const express = require('express')
const router = express.Router()

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('please enter a number in URL')
})
router.get('/:number', function (req, res) {
  // console.dir(req.params.number);

  // Array of messages
  const messageArr = ['Your number is 42, please enter another number',
    'please enter only numbers and not letters',
    'please do not enter special characters'
  ]

  // check if entered value has a character
  function isLetter (str) {
    return str.match(/[a-z]/i)
  }
  const hasLetter = isLetter(req.params.number)

  // check if entered value has a special character
  function isSpecialChar (spchar) {
    return spchar.match(/^[^a-zA-Z0-9]+$/)
  }
  const hasSpecialChar = isSpecialChar(req.params.number)

  let finalresult = parseInt(req.params.number)
  if (finalresult === 42) {
    finalresult = messageArr[0]
  } else {
    finalresult *= 2
  }
  if (hasLetter) {
    finalresult = messageArr[1]
  }
  if (hasSpecialChar) {
    finalresult = messageArr[2]
  }
  res.json({ result: finalresult })
})

module.exports = router
