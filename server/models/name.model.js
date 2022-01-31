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

nameSchema.methods.toJSON = function () {
    const nameObject = this.toObject();
    delete nameObject.meaningKeywords;
    return nameObject;
};

const Name = mongoose.model('Name', nameSchema);

module.exports = Name;
