const express = require('express');
const colors = require('./colors.json')
const cors = require('cors')

const app = express();



const corsOptions = {
  origin: 'http://localhost:4000', // Allow only requests from this origin
  methods: 'GET,POST,DELETE', // Allow only these methods
  allowedHeaders: ['Content-Type', 'Authorization'] // Allow only these headers
};

//routers

const router = require('./routes/userRoutes.js')

//allow json to be sent and used
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/users', router)


//middleware
app.use(cors(corsOptions));


// app.get('/:name', (req, res, next) => {
//   const name = req.params.name;
//   res.send(`Working, ${name}`)
//   next()
// }
// )


// app.get('/', (req, res) => {
//   res.json(colors);
// }
// )


const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))