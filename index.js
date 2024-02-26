const express = require('express')
const Router = require('./routes')
require('dotenv').config()

const app = express()
const port = process.env.PORT || 4000
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(Router)
app.listen(port, () => console.log(`Example app listening on port ${port}!`))