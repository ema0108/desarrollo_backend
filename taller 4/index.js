const express = require('express');
const app = express();
app.use(express.json());

// Importar y usar rutas
app.use('/users/hobby', require('./routes/hobby'));
app.use('/users/exists', require('./routes/exists'));
app.use('/users/team-experience', require('./routes/teamExperience'));
app.use('/users/by-faction', require('./routes/byFaction'));
app.use('/users', require('./routes/register'));

// Configuración del servidor
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
