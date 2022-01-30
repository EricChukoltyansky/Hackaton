const express = require('express');
// const NameController = require('../controllers/name.controller');
// const auth = require('../services/auth.js');
const router = new express.Router();

//will be used to create a new user(sign up)
// router.post('/names', NameController.createUser);

// router.get('/users/:id', NameController.getUserById);

// //only for admins
// router.patch('/names/auth', auth, NameController.updateAuthUser);

// //only for admins
// router.delete('/names/auth', auth, NameController.deleteAuthUser);

module.exports = router;
