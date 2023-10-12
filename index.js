const express = require('express')
const app = express()
const port = 3000

app.use(express.json());
console.log("ram-4 changes single")

app.use('/',(req,res)=>{
  res.send("Hello")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
  console.log(`Example app listening on port ${port}1`)
  console.log(`Example app listening on port ${port}`)
  console.log(`Example app listening on port ${port}`)
})
