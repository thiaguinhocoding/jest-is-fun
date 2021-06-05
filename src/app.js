'use strict';
const express = require('express');

const app = express();

app.get('/', async (_, res) => {
    res.json({ hello: 'world' });
});

module.exports = app;
