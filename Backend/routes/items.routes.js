const express = require('express');
const router = express.Router();
const {
	createItem,
	deleteItemsById,
	getAllItems,
	editItemById,
  getItem
} = require('../controllers/items.controller');

router
.route('/')
.post(createItem)
.get(getAllItems);

router
.route('/:id')
.get(getItem)
.put(editItemById)
.delete(deleteItemsById);

module.exports = router;
