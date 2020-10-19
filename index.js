const express = require('express');
const movieRouter = require('./routes/movieRouter');
const userRouter = require('./routes/userRouter');
const orderRouter = require('./routes/orderRouter');
const auth = require('./middleware/auth');


const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', auth, (req, res) => res.send(req.user))

//Endpoint de películas
app.use('/movies', movieRouter);

//Endpoint de usuarios
app.use('/users', userRouter);

//Endpoint de pedidos
app.use('/orders', orderRouter);


app.listen(PORT, () => console.log(`Server UP on port ${PORT}`));