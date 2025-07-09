require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

const githubData = {
  "login": "premPanhale-0102",
  "id": 162705951,
  "node_id": "U_kgDOCbKyHw",
  "avatar_url": "https://avatars.githubusercontent.com/u/162705951?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/premPanhale-0102",
  "html_url": "https://github.com/premPanhale-0102",
  "followers_url": "https://api.github.com/users/premPanhale-0102/followers",
  "following_url": "https://api.github.com/users/premPanhale-0102/following{/other_user}",
  "gists_url": "https://api.github.com/users/premPanhale-0102/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/premPanhale-0102/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/premPanhale-0102/subscriptions",
  "organizations_url": "https://api.github.com/users/premPanhale-0102/orgs",
  "repos_url": "https://api.github.com/users/premPanhale-0102/repos",
  "events_url": "https://api.github.com/users/premPanhale-0102/events{/privacy}",
  "received_events_url": "https://api.github.com/users/premPanhale-0102/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": null,
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 3,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2024-03-08T12:15:12Z",
  "updated_at": "2025-07-09T14:21:13Z"
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twiter', (req, res) =>{
    res.send('hiteshdotcom')
})

app.get('/login', (req, res) =>{
    res.send('<h1>please login at chai aur code</h1>')
})

app.get('/youtube', (req,res) =>{
  res.send("<h2>Chai aur Code</h2>")
})

app.get('/github', (req, res) =>{
  res.json(githubData)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
