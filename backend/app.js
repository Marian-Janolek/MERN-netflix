const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoute = require('./routes/auth');
const userRoute = require('./routes/users');
const movieRoute = require('./routes/movies');
const listRoute = require('./routes/lists');
const cors = require('cors');
const morgan = require('morgan');

dotenv.config();
connectDB = mongoose.connect;

app.use(morgan('tiny'));
app.use(express.json());
app.use(cors());

app.use('/api/auth', authRoute);
app.use('/api/users', userRoute);
app.use('/api/movies', movieRoute);
app.use('/api/lists', listRoute);

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
      .then(() => console.log('Successful connected to DB'))
      .catch((err) => console.log(err));
    app.listen(port, console.log(`Server is running on port : ${port}`));
  } catch (error) {
    console.log(error);
  }
};
start();
