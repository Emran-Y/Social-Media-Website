const express = require('express')
const app = express()
const helmet = require('helmet')
const morgan = require('morgan')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const userRoute = require('./routes/users')
const authRoute = require('./routes/auth')


dotenv.config()

app.use(express.json())
app.use(helmet())
app.use(morgan('common'))

mongoose.connect(process.env.MONGODB_URL, {useNewUrlParser: true,useUnifiedTopology: true})
    .then(() => {
      console.log('Connected to MongoDB')
    })
    .catch((error) => {
      console.error('Error connecting to MongoDB:', error.message)
    })

app.use('/api/user',userRoute)
app.use('/api/auth',authRoute)


app.listen(8800,() => console.log('Backend server is running'))