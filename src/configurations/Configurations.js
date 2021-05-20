import dotenv from 'dotenv'
import mongoose from 'mongoose'

dotenv.config()
const { PORT ,DEV_DATABASE_URL } = process.env

const connectToPort = async (app) => {
    try{
        await app.listen (PORT , () => {
            console.log (`  ✔️     Server is running on port : ${PORT}`)
        })
    } catch (error) {
            console.log (`  ❌     Error , Server is not running on port : ${PORT}`)
    }
}

const connectToDatabas = async (app) => {
    try{
        await mongoose.connect(DEV_DATABASE_URL, {useNewUrlParser: true , useUnifiedTopology: true , useCreateIndex: true})
        console.log('   ✔️     Successfuly connected to the databas.. ')
    } catch (error) {
        console.log('   ❌     Error while trying to connect to the databas: ' + error)
        process.exit()
    }
} 


export default {
    connectToPort,
    connectToDatabas
}