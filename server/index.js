const express = require('express');
const morgan = require('morgan');
const app = express();

const { mongoose } = require('./database');

//settings
app.set('port', process.env.PORT || 3000);

//midlewares
app.use(morgan('dev'));
app.use(express.json()); //ya no es necesario el body-parser

//routes
app.use('/api/employees', require('./routes/employee.routes'));

//starting the server

app.listen(app.get('port'), () => {
    console.log('Server on port ', app.get('port'));
});