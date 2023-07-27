require('dotenv').config();
const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes')
const userRoutes = require('./routes/usersRoutes');

const app = express();

app.use(express.json());
app.use(cors())

app.use(authRoutes);
app.use(userRoutes);

const port = process.env.PORT || 3000;

app.listen(port);