const app = require('express')();
const consign = require('consign');
const mongoose = require('mongoose');

require('./config/mongodb');

app.mongoose = mongoose;

consign()
  .include('./config/passport.js')
  .then('./config/middlewares.js')
  .then('./api/validation.js')
  .then('./api')
  .then('./schedule')
  .then('./config/routes.js')
  .into(app);


const port = process.env.PORT || 3000;
app.listen(port, ()=>{
  console.log('[uniqua-com] BACKEND executando na porta %s', port);
});
