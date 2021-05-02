const mongoose = require('mongoose');
const options = require('../configs/mongodb');

class Mongo{
    static async connect(dbName){
        options.dbName = dbName;
        return await mongoose.createConnection(process.env.MONGO_URI,options)
    }
}

module.exports = Mongo;
