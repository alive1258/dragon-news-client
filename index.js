const express = require('express')
const app = express()
const port =process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('hello world')
  })

  app.listen(port,()=>{
    console.log(`dragon api is running on port ${port}`)
  })