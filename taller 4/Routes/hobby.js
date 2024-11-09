const express = require('express');
const router = express.Router();
const users = require('../data/users');

router.get('/', (req, res) => {
    const { hobby } = req.query;
    if (!hobby) return res.status(400).json({ error: "Hobby no proporcionado" });
    const usersWithHobby = users.filter(user => user.hobbies.includes(hobby));
    res.json(usersWithHobby);
});

module.exports = router;
