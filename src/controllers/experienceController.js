const conn = require('../database/connection');
module.exports = {

    async get(request,response){
        const {page = 1, limit = 5 } = request.query;

        const [count] = await conn('experience').count();

        console.log(count)

        const experiences = await conn('experience')
            .limit(limit)
            .offset((page -1) * limit )
            .select('*');

        response.header('X-Total-Count', count['count(*)'] );   

        return response.json(experiences);
    },

    async create(request,response) {
        const { company, actvities, start, end } = request.body;

    await conn('experience').insert({
        company, actvities, start, end,
    });
    return response.json({id:1});
    },

    async delete(request,response){
        const {id} = request.params

        const experience = await conn('experience')
            .where('id',id)
            .select('id')
            .first();   

        if (experience.id != id) {
            return response.status(404).json({error:'Id not found'});
        }
        
        await conn('experience').where('id',id).delete();

        return response.status(204).send();               
    }
}
