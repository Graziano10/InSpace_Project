const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const helmet = require('helmet');

const cors = require('cors');

app.use(cors())

app.use(express.json());
app.use(bodyParser.json());


app.use('/' , require('./routes/Home'))
app.use('/cart', require('./routes/cart'));
app.use('/products', require('./routes/products'));
app.use('/promo-code', require('./routes/promo'));
app.use('/users', require('./routes/users'));

app.use('/register' , require('./routes/register'));


app.listen(3000, () => {
  console.log("Server up and running on http://localhost:3000...");
});