const express = require('express');
const {
    getRandomName,
    getNameByParam,
    getNames,
    getAutoCompleteNames,
} = require('../controllers/name.controller.js');
// const auth = require('../services/auth.js');
const router = new express.Router();

router.get('/names', getNames);

router.get('/names', getNames);

router.get('/names/random', getRandomName);

router.get('/names/autocomplete', getAutoCompleteNames);

router.get('/names/:name', getNameByParam);

// //only for admins
// router.patch('/names/auth', auth, updateAuthUser);

// //only for admins
// router.delete('/names/auth', auth, NameController.deleteAuthUser);

module.exports = router;
