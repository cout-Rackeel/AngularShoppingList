const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors('*'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Routers
const indexRouter = require('./routes/index.routes')
const itemsRouter = require('./routes/items.routes')
const categoriesRouter = require('./routes/categories.routes')

// Routes
app.use('/', indexRouter);
app.use('/api/items', itemsRouter);
app.use('/api/categories', categoriesRouter);


module.exports = app
