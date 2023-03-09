const express = require('express')
const cors = require("cors")
const app = express()
app.use(cors())
const userRouter = require('./router/router')
app.use('/api',userRouter)
app.listen('80',()=>{
	console.log("运行在80端口");
})