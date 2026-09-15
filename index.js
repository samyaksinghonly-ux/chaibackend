//import or requiring express first of all
const express = require('express');
//now using app as a express tool which will help us to use its powerful tools.
const app = express()
//ports are different networks used in computer this can be set to 3000 as default.

//install environment file into the index file firstly then we can use the variables in the environment variable.
require('dotenv').config()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

//it basically takes out request from /twitter route which user send to it.
app.get('/twitter', (req, res) => {
  res.send('samyakdotcom')
})

app.get('/login', (req, res) => {
  res.send('<h1>please firstly login at chai aur code</h1>')
})

app.get('/youtube', (req, res) => {
  res.send('<h2> chai aur code</h2>')
})

//this helps in listening in the app it is very important , plus it takes a functionality as well.
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})