'use strict';

const express = require('express');
const router = express.Router();
const ctrl = require('./home.ctrl');

router.get('/', ctrl.home);
router.get('/login', ctrl.login);
router.get('/info', ctrl.info);

module.exports = router;