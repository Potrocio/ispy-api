const express = require('express')
require('dotenv').config()
const cors = require('cors')
const usersRouter = require("./routes/usersRouter")
const targetsRouter = require("./routes/targetsRouter")

const app = express();

//cors will be set to my local environment, but I can change it later
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/users', usersRouter)
app.use('/targets', targetsRouter)

const PORT = 4044;

app.listen(PORT, () => {
    console.log(`Server listening on Port: ${PORT}`)
})