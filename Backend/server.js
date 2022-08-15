require('dotenv').config();
const app = require('./app');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 3000;

// Start Express App
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true }, (err) => {
	if (err) throw err

	console.log('MongoDB Connected')

	app.listen(PORT, () => {
		console.log(`Server listening on http://localhost:${PORT}`)
	})
})
