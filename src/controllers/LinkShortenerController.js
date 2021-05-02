const CRC32 = require('crc32');


class LinkShortenerController{
    create(req, res){
        const url = req.body.url
        if(!url) return res.status(400).json({error:"You must to send url in body"})
        //valid format with regex
        const id = CRC32.str(url)

    }



}



module.exports = new LinkShortenerController();