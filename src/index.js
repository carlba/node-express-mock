
const express = require('express')

const port = 3000

// app.get('/success', (req, res) => {
//   return res.json({result: 'test'});
// })

// app.get('/token_expired', (req, res) => {
//   res.status(401).json({error: 'refresh_token expired'});
// })

// app.post('/restapi/v2.1/accounts/c967a94d-f345-4ffc-9e0e-2e5e79291af9/envelopes', (req, res) => {
//   res.status(401).json({error: 'refresh_token expired'});
// })

const routes = [
  {method: 'GET', route: "/categories", reply: [{id:1, 'title': 'Category1'}], status: 200},
];

function createApp () {  
  const app = express()
  routes.forEach(route=> {
    app.all(route.route, (req, res) => {      
      console.log(route);
      if (route.method === 'GET' && req.method === 'GET') {        
        res.status(route.status).json(route.reply).end();
      }      
    })    
  })
  return app
}



const app = createApp();



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})