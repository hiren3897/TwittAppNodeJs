const express = require('express');
const Router = express.Router();

const testMiddleware = require('../middelwares/test');

Router.get('/', testMiddleware, (req, res) => {
    res.status(200).send('GET Tws');
})

Router.get('/:twId', (req, res) => {
    twId = req.params.twId;
    res.status(200).send('GET Tw Id: ' + twId);
})

Router.post('/:twId', (req, res) => {
    console.log(req.body.message);
    res.status(200).send('POST Tw: ' + req.body.message);
})

module.exports = Router;