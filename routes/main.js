const express = require('express');
const router = express.Router();
const authenticationMiddleware = require('../middleWare/auth');

const {login,dashboard} = require('../constroller/main');

router.route('/dashboard').get(authenticationMiddleware,dashboard);
router.route('/login').post(login);

module.exports = router;