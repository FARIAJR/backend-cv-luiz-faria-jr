const request = require('supertest');
const app = require('../../src/app');
const conn = require('../../src/database/connection')


describe('EXPERIENCE', () => {
    beforeEach(async () => {
        await conn.migrate.rollback();
        await conn.migrate.latest();
    });

    afterAll(async () => {
        await conn.destroy();
    });

    it('should be able to create new EXPERIENCE', async () => {
        const response = await request(app)
            .post('/experience')
            .send({
                company: "amazonas",
                activities: "develop systems",
                role: "fullstack developer",
                start: "2018",
                end: "2019" 
            });
        expect(response.body).toHaveProperty('id');
    })
})