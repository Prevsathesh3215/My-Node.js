const express = require('express');
const cors = require('cors')
const { getLocation } = require('./req')

const app = express()

app.use(cors({
  origin: 'http://localhost:9500', // Allow only requests from this origin
  methods: 'GET,POST, PUT, DELETE', // Allow only these methods
  allowedHeaders: ['Content-Type', 'Authorization']
}))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))




app.get('/weather', async (req, res) => {

  try{
    const data = await getLocation(req.body)

    res.status(200).send(data)
    
  }
  catch(err){
    res.status(500).json({
      succes: false, 
      message: err.message || 'Your location does not exist'
    })
  }

  
} )

app.get('/test', (req, res) => {
  res.status(200).send('HI')
})




app.listen(9500, () => {
  console.log('App listening at port 9500')
})