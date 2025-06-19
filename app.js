const express = require('express')
require('dotenv').config()
const cors = require('cors')
import usersRouter from './routes/usersRouter';
import targetsRouter from './routes/targetsRouter';

const app = express();

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/users', usersRouter)
app.use('/targets', targetsRouter)


const PORT = 4044;

app.listen(PORT, () => {
    console.log(`Server listening on Port: ${PORT}`)
})