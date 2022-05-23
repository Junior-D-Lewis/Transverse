const express = require('express');
const morgan = require('morgan');
const favicon = require('serve-favicon');
const bodyParser = require('body-parser');
const sequelize = require('./src/db/sequelize');
const cors = require('cors')

const app = express();
const port = 3000;

app
    .use(favicon(__dirname + '/favicon.ico'))
    .use(morgan('dev'))
    .use(bodyParser.json())
    .use(cors())
sequelize.initDb() 

require('./src/routes/users/findAllUsers')(app);
require('./src/routes/users/findUsersByPk')(app);
require('./src/routes/users/createUsers')(app);
require('./src/routes/users/updateUsers')(app);
require('./src/routes/users/deleteUsers')(app);
require('./src/routes/users/giveGain')(app);
require('./src/routes/users/noteUser')(app);
require('./src/routes/users/loginUsers')(app);

require('./src/routes/annonces/createAnnonce')(app);
require('./src/routes/annonces/findAllAnnonces')(app);
require('./src/routes/annonces/findAnnoncesByPk')(app);
require('./src/routes/annonces/updateAnnonce')(app);
require('./src/routes/annonces/deleteAnnonce')(app);
require('./src/routes/annonces/acceptAnnonce')(app);

require('./src/routes/stats/order')(app);

app.listen(port, () => console.log(`Server is running on http://localhost:${port}!`));