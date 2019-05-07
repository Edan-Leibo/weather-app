const path = require('path')
const express = require('express')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const app = express()
const port = process.env.PORT || 3000



app.listen(port, () => {
    console.log('Server is running with port ' + port)
})