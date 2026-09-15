//import or requiring express first of all
const express = require('express');
//now using app as a express tool which will help us to use its powerful tools.
const app = express()
//ports are different networks used in computer this can be set to 3000 as default.

//install environment file into the index file firstly then we can use the variables in the environment variable.
require('dotenv').config()


const githubData =   {
    "login": "mojombo",
    "id": 1,
    "node_id": "MDQ6VXNlcjE=",
    "avatar_url": "https://avatars.githubusercontent.com/u/1?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/mojombo",
    "html_url": "https://github.com/mojombo",
    "followers_url": "https://api.github.com/users/mojombo/followers",
    "following_url": "https://api.github.com/users/mojombo/following{/other_user}",
    "gists_url": "https://api.github.com/users/mojombo/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/mojombo/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/mojombo/subscriptions",
    "organizations_url": "https://api.github.com/users/mojombo/orgs",
    "repos_url": "https://api.github.com/users/mojombo/repos",
    "events_url": "https://api.github.com/users/mojombo/events{/privacy}",
    "received_events_url": "https://api.github.com/users/mojombo/received_events",
    "type": "User",
    "user_view_type": "public",
    "site_admin": false
  }


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
app.get('/github', (req, res) => {
  res.json(githubData)
})

//this helps in listening in the app it is very important , plus it takes a functionality as well.
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})