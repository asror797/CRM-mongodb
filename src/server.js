const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const app = express()
const PORT = process.env.PORT || 5000
const routes = require('./routers/routers')
const {sign,verify} = require('jsonwebtoken')


mongoose.connect('mongodb://localhost:27017/test')
  .then(()=>{console.log('mongodb connected')})
  .catch((err)=>{console.error(err)})



//midllwares

app.set('view engine','ejs')
app.use(express.json())
app.use(express.static(path.resolve(__dirname,'./public')))
app.set('views',path.resolve(__dirname,'./views'))
app.use('/scripts',express.static(path.resolve(__dirname,'./public')))
app.use('/css',express.static(path.resolve(__dirname,'/public')))
app.use('/img',express.static(path.resolve(__dirname,'./public')))




app.use('/',routes)


app.listen(PORT,()=>{
  console.log(`Server is runing at ${PORT}`);
})

