const express = require('express')
require('dotenv').config()
const cors = require('cors')
const usersRouter = require("./routes/usersRouter")
const targetsRouter = require("./routes/targetsRouter")

const app = express();

//cors will be set to my local environment, but I can change it later
app.use(cors({
    origin: 'https://photo-tagging-app-rho.vercel.app',
    credentials: true
}))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/users', usersRouter)
app.use('/targets', targetsRouter)

const PORT = process.env.PORT || 4044;

app.listen(PORT, () => {
    console.log(`Server listening on Port: ${PORT}`)
})