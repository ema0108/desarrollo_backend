const express = require('express');
const router = express.Router();
const users = require('../data/users');

router.get('/', (req, res) => {
    const { id } = req.query;
    if (!id) return res.status(400).json({ error: "ID no proporcionado" });
    const userExists = users.some(user => user.id === parseInt(id));
    res.json({ exists: userExists });
});

module.exports = router;
