const mongoose = require('mongoose');

const nameSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: true,
        trim: true,
    },
    origin: {
        type: String,
        required: true,
        trim: true,
    },
    meaning: {
        type: String,
        trim: true,
    },
    meaningKeywords: [
        {
            type: String,
            required: true,
            trim: true,
        },
    ],
    genderMale: {
        type: Boolean,
        required: true,
    },
    genderFemale: {
        type: Boolean,
        required: true,
    },
    englishSpelling: {
        type: String,
        trim: true,
    },
    arabicSpelling: {
        type: String,
        trim: true,
    },
});

const Name = mongoose.model('Name', nameSchema);

module.exports = Name;
