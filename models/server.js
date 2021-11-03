const mongoose = require('mongoose');

const { Schema } = mongoose;

const ServerSchema = new Schema({
    server_count: {
        type: Number,
        required: [true, 'server count is required']
    }
})

const Servers = mongoose.model('servers', ServerSchema)

module.exports = Servers;