const express = require('express');
const router = express.Router();
const pilots = require('../data/pilots');

router.get('/', (req, res) => {
    const { faction } = req.query;
    if (!faction) return res.status(400).json({ error: "Facción no proporcionada" });
    const pilotsInFaction = pilots.filter(pilot => pilot.faction === faction);
    res.json(pilotsInFaction);
});

module.exports = router;
