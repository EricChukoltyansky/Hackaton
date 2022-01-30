const express = require('express');
const NameController = require('../controllers/name.controller.js');
// const auth = require('../services/auth.js');
const router = new express.Router();

router.get('/names', NameController.getAllNames);

// router.get('/names', NameController.getQueriedNames);
// {
//     searchTerm: '',//word in meaning
//     genderMale: true,//boolean
//     genderFemale: true,//boolean
// }

// router.get('/names/random', NameController.getUserByName);
// {
//     genderMale: true,//boolean
//     genderFemale: true,//boolean
// }

// router.get('/names/:name', NameController.getUserByName);

// //only for admins
// router.patch('/names/auth', auth, NameController.updateAuthUser);

// //only for admins
// router.delete('/names/auth', auth, NameController.deleteAuthUser);

module.exports = router;
