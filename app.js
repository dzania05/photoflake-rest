const express = require('express')
const bodyParser = require('body-parser')
const axios = require('axios')
const cors = require('cors')

require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 8000
const api = process.env.API_URL + process.env.API_KEY

app.use(cors()) 

app.get('/api/search', async (req, res) => {
	try {
		const tags = req.query.tags || 'cars'
		const response = await axios.get(api + '&tags=' + tags)
		
		if(response){
			res.status(200).json({
				data: response.data,
				message: 'success fetch data'
			})
		} else {
			res.status(400).json({
				data: {},
				message: 'cannot fetch data'
			})
		}
	} catch(err){
		res.status(400).json({
			data: {},
			message: err.message
		})
	}
})

app.listen(PORT, () => console.log('Server running and up on port:', PORT))