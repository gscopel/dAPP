const express = require('express');
const router = express.Router();

//Login Page
router.get('/login', (req, res) => res.send('LOGIN TEST'));

//Register Page
router.get('/register', (req, res) => res.send('REGISTER TEST'));


module.exports = router;
