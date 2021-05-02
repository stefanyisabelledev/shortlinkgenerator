const mongoose = require('mongoose');
const options = require('../configs/mongodb');

class Mongo{
    static async connect(dbName){
        options.dbName = dbName;
        const connection = await mongoose.createConnection(process.env.MONGO_URI,options)
        this.connection = connection
    }
    static async createOrGetConnection(dbName){
        if(!this.connection){
            await this.connect(dbName)
        }
        return this.connection;
    }
}

module.exports = Mongo;
