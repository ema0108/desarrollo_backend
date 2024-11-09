const express = require('express');
const router = express.Router();
const pilots = require('../data/pilots');

router.get('/', (req, res) => {
    const { team } = req.query;
    if (!team) return res.status(400).json({ error: "Equipo no proporcionado" });
    const teamIds = team.split(',').map(id => parseInt(id));
    const teamExperience = pilots
        .filter(pilot => teamIds.includes(pilot.id))
        .reduce((acc, pilot) => acc + pilot.experience, 0);
    res.json({ totalExperience: teamExperience });
});

module.exports = router;
