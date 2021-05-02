const Mongo = require('../index')
const schema = require('../schema/linkSchema')

class UrlModel{
    constructor(){
        const connection = Mongo.connect('links')
        this.model = connection.model('short',schema)
    }
    async getUrl(identifier){
        return await this.model.findOne({identifier})
    }

}

module.exports = UrlModel;