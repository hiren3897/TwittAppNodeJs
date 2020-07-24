const express = require('express');
const Router = express.Router();

Router.get('/', (req, res) => {
    res.render('tws');
});

module.exports = Router;