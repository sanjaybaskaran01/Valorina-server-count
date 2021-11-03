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


app.get('/', async (req, res) => {
    const servers_count = await Servers.findById(process.env.ID)
    res.json({ schemaVersion: 1, logo: "Discord",style="for-the-badge", label: "", "message": `Server count: ${servers_count['server_count']}`, "color": "555" });
})

app.listen(port, () => {
    console.log(`listening to port ${port}`);
})