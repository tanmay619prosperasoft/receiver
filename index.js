const express = require('express')
const app = express()
const port = 3000

app.use(express.json());

app.use('/',(req,res)=>{
  res.send("Hello")
console.log("ram-5")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
