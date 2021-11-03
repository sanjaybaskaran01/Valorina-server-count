const express = require('express');
const app = express();

require('dotenv').config();

const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

mongoose.Promise = global.Promise;

const Servers = require('./models/server');

const port = process.env.PORT || 3001


app.get('/api', async (req, res) => {
    const servers_count = await Servers.findById(process.env.ID)
    res.setHeader('Content-Type', 'application/json')
    res.json({ schemaVersion: 1, label: "Valorina #6711", message: `Server count: ${servers_count['server_count']}`, namedLogo: "Discord", labelColor: "586AEA", style: "for-the-badge", logoColor: "white", color: "FE424F" });
})

app.listen(port, () => {
    console.log(`listening to port ${port}`);
})