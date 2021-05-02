const CRC32 = require('crc-32');
const UrlModel = require('../database/models/UrlModel')

class LinkShortenerController{

    async create(req, res){
        const url = req.body.url
        if(!url) return res.status(400).json({error:"You must to send url in body"})
        //valid format with regex
        const identifier = CRC32.str(url)
        const model = new UrlModel()
        try{
            const data = await model.createUrl(url, identifier)
            return res.json(data)
        }catch(error){
            return res.status(400).json({error:error.message})
        }
    
    }

    async getUrl(req, res){
        const identifier = req.params.id
        const model = new UrlModel()
        const data = await model.getUrl(identifier)
        return res.json({url:data.url})
    }

}

module.exports = new LinkShortenerController();