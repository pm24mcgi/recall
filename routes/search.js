const express = require('express');
const router = express.Router();
const db = require('../db/models');
const { asyncHandler } = require('./utils')
const { Task } = db;


router.get('/', asyncHandler(async (req, res, next) => {
    const { userId } = req.session.auth;
    const tasks = await Task.findAll({
        where: { userId },
        order: [['dueDate', 'ASC']]
    })
    res.json({ tasks });
}));


module.exports = router;
