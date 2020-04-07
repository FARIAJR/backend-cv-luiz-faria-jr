const conn = require('../database/connection');
module.exports = {

    async get(request,response){
        const educations = await conn('education').select('*');
        return response.json(educations);
    },
    
    async create(request,response) {
        const { school, degree, description, activities, obs, start, end } = request.body;

        await conn('education').insert({
            school, degree, description, activities, obs, start, end
        });
        return response.json({id:1});
    },

    async delete(request,response){
        const {id} = request.params

        const education = await conn('education')
            .where('id',id)
            .select('id')
            .first();   

            console.log('education',education);
            console.log('id',id);

        if (education.id != id) {
            return response.status(404).json({error:'Id not found'});
        }
        
        await conn('education').where('id',id).delete();

        return response.status(204).send();               
    }
}