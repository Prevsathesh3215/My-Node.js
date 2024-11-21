const axios = require('axios')
require('dotenv').config()

// const lat = 3.166480
// const lon = 101.748344
const API_KEY = process.env.API_KEY



const getLocation = async (body) => {
  
  const count = Object.keys(body).length
  let url 
  
  switch(count){
    case 1:
      url = `http://api.openweathermap.org/geo/1.0/direct?q=${body.city}&limit=1&appid=${API_KEY}`
      break

    case 2:
      url = `http://api.openweathermap.org/geo/1.0/direct?q=${body.city},${body.state}&limit=1&appid=${API_KEY}`
      break

    case 3:
      url = `http://api.openweathermap.org/geo/1.0/direct?q=${body.city},${body.state},${body.country}&limit=1&appid=${API_KEY}`
      break
  }


  const resp = await axios({
    method: 'get',
    url: url
  })


  return await getWeather(resp.data[0].lat, resp.data[0].lon)
  

}

const getWeather = async (lat, lon) => {
  const resp = await axios({
    method: 'get',
    url: `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  })

  resp.data.dt = new Date(resp.data.dt * 1000)
  resp.data.sys.sunrise = new Date(resp.data.sys.sunrise * 1000)
  resp.data.sys.sunset = new Date(resp.data.sys.sunset * 1000)

  return resp.data
}


module.exports = {
  getLocation
}

// getLocation();

