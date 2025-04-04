const express = require('express')
const cors = require('cors')

require('dotenv').config()

const PORT = process.env.PORT

const app = express()

app.use(express.json())
app.use(cors())



app.get('/server-check',(req,res)=>{
    console.log("Server Running...")
})

app.listen(PORT,()=>{
    console.log(`Server started at port ${PORT}`)
})