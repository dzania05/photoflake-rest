const app = require('../app')
const supertest = require('supertest')
const request = supertest.agent('https://photoflake.herokuapp.com')

describe('Testing Flickr seacrh API ', () => {
	it('Test search api with tags keyword', async () => {
		const response = await request.get('/api/search?tags=cars');

		expect(response.status).toBe(200);
		expect(response.body.data.stat).toBe('ok');
		expect(response.body.message).toBe('success fetch data');
	})
})