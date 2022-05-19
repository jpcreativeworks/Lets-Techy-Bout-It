const path = require('path');
const express =require('express');
const sql = require('./config/connection.js');
const routes = require('./contollers')

//middleware 
const app = express();
const PORT = process.env.PORT || 8080

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(routes);

sql.sync({ force: false}).then(() => {
    app.listen(PORT, () => console.log(`Now listening to PORT ${env.PORT}`));
  });