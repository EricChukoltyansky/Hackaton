const mongoose = require('mongoose');

const nameUrlLinkSchema = new mongoose.Schema({
    sourceUrl: {
        type: String,
        unique: true,
        required: true,
    },
    links: [
        {
            type: String,
            required: true,
            trim: true,
        },
    ],
});

const NameUrlLink = mongoose.model('Name-Url-Link', nameUrlLinkSchema);

module.exports = NameUrlLink;
