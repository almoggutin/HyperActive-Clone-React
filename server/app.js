const path = require('path');
const express = require('express');
const cors = require('cors');

const publicDirectoryPath = path.join(__dirname, '../client/build');

const app = express();
app.use(express.json());
app.use(cors());

app.use(express.static(publicDirectoryPath));

app.get('*', (req, res) => res.sendFile(`${publicDirectoryPath}/index.html`));

module.exports = app;
