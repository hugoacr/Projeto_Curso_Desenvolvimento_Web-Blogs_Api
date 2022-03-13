require('dotenv').config();
const bodyParser = require('body-parser');
const express = require('express');
const loginRouters = require('./routers/loginRouters');
const categorieRouters = require('./routers/categorieRouters');
const userRouters = require('./routers/userRouters');

const middlewares = require('./middlewares');

const app = express();
app.use(bodyParser.json());

app.use(middlewares.errorHandler);

app.use('/login', loginRouters);

app.use('/user', userRouters);

app.use('/categories', categorieRouters);

app.listen(3000, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});
