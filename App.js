import express from 'express'
import helmet from 'helmet'
import morgan from 'morgan'
import dotenv from 'dotenv'

dotenv.config()
const { PORT } = process.env

const app = express()
app.use(helmet())

app.use(morgan('common',))


app.listen(PORT , () => {
    console.log (`  ✔️     SERVERN IS RUNNING ON PORT : ${PORT}`)
})

app.get('/product' , (requset,response) => {
    response.send(`  ✔️     SERVERN IS RUNNING `)
} )
