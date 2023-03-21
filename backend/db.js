require("dotenv").config();
const mongoose = require('mongoose')
const password = "BQrStvgn3gRZJwzf"
const mongoURI = "mongodb://127.0.0.1:27017/portfolio"
// const uri = process.env.MONGOLAB_URI 

// const uri = process.env.URI + "?retryWrites=true&w=majority"
// console.log("THe code is ",urc)
// mongodb+srv://aksr2003:$BQrStvgn3gRZJwzf@portfolio.qrnpgxw.mongodb.net/?retryWrites=true&w=majority
const uri = `mongodb+srv://aksr2003:$BQrStvgn3gRZJwzf@portfolio.qrnpgxw.mongodb.net/?retryWrites=true&w=majority`

const connectToMongoose =()=>{
    // mongoose.set('strictQuery', true);
    try { 
        mongoose.connect(uri, ()=>{
            console.log("connected to mongoose")
        })
    } catch (error) {
        console.log(error)
        process.exit()
    }
    // .catch(err => console.log(err))

}


module.exports = connectToMongoose
