const express = require('express');
const router = express.Router();
const users = require('../data/users');

router.post('/', (req, res) => {
    const { id, name, carrera, hobbies } = req.body;
    if (!id || !name || !carrera || !hobbies) {
        return res.status(400).json({ error: "Información incompleta del usuario" });
    }
    const newUser = { id, name, carrera, hobbies };
    users.push(newUser);
    res.json({ message: "Usuario registrado correctamente", user: newUser });
});

module.exports = router;
