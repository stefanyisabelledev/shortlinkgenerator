const Mongo = require('../index')
const schema = require('../schema/linkSchema')

class UrlModel{
    constructor(){
        const connection = Mongo.connection
        this.model = connection.model('short',schema)
    }
    async getUrl(identifier){
        return await this.model.findOne({identifier})
    }
    async createUrl(url,identifier){
        await this.model.updateOne({
            identifier
        },{
            url,
        }, {
            upsert: true,
            
        })
        return await this.model.findOne({
            identifier
        })
    }

}

module.exports = UrlModel;