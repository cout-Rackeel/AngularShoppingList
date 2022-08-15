const express = require('express');
const router = express.Router();
const { getAllCategories, createCategories, getCategory, deleteCategoryById, editCategory } = require('../controllers/categories.controller')

router.route('/')
.get(getAllCategories)
.post(createCategories);

router.route('/:id')
.get(getCategory)
.put(editCategory)
.delete(deleteCategoryById);


module.exports = router;
