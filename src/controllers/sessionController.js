const conn = require('../database/connection');
module.exports = { 
    async create(request,response) {
        const { description, obs, start, end } = request.body;

        await conn('education').insert({
            description, obs, start, end,
        });
        return response.json({id:1});
    },
}