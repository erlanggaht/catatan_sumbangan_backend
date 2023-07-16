import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import 'dotenv/config'
import konek_db from './src/models/connect_database.js'
import router from './src/route/route.js'
import cookieParser from 'cookie-parser'

const app = express()

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.set('views', './src/views')
app.set('view engine', 'pug')
app.use(cookieParser());
app.use(cors())
app.use(router)

app.listen(process.env.PORT,() => {
    console.log(`Server Connect in port ${process.env.PORT}`)
})

konek_db.connect ((err)=>{
    if(!err) return console.log('connect database success')
    console.log('failed connect database')
})