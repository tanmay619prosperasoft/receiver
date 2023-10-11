const express = require('express')
const app = express()
const port = 3000

app.use(express.json());

app.use('/',(req,res)=>{
  res.send("this is ram ")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
  console.log(`Example app listening on port ${port}`)
  console.log(`Example app new ram-2 branch is added ${port}`)
})