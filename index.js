const app =  require('./src/app')
require('dotenv').config()
const Mongo = require('./src/database/index')

async function start(){
    await Mongo.connect('links')
    const listener = app.listen(process.env.PORT || 3000,()=>{
        console.log("Server is listening ")
    })
    
}

start()

