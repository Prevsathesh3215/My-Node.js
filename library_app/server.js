const express = require('express')
const cors = require('cors')


const app = express()

const corsOptions = {
  origin: 'http://localhost:4000', // Allow only requests from this origin
  methods: 'GET,POST, PUT, DELETE', // Allow only these methods
  allowedHeaders: ['Content-Type', 'Authorization'] // Allow only these headers
};

const bookRouter = require('./routes/bookRoutes.js')
const categRouter = require('./routes/categRoutes.js')
const borrowerRouter = require('./routes/borrowerRouter.js')
const regisUserRouter = require('./routes/regisUserRoutes.js')

//allow json to be sent and used
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/books', bookRouter)
app.use('/api/categ', categRouter)
app.use('/api/borrow', borrowerRouter)
app.use('/api/users', regisUserRouter)


//security middleware
app.use(cors(corsOptions));


const PORT = process.env.PORT || 3500;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})