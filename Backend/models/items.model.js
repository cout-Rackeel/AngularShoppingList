const db = require('mongoose')

let itemsSchema = new db.Schema({
	category: { type: db.Schema.Types.ObjectId, ref:'Categories' },
	item_name: { type: String, required: true },
	price: { type: Number, required: true },
	quantity: { type: Number, required: true },
} , {collection:'items'})

module.exports = db.model('items', itemsSchema)
