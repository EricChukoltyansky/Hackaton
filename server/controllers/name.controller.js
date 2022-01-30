const NameModel = require('../models/name.model');

exports.getAllNames = async (req, res) => {
    try {
        const names = await NameModel.find();
        res.send(names);
    } catch (e) {
        res.status(500).send();
    }
};

//
// query: {
//     searchTerm: '',//word in meaning
//     genderMale: true,//boolean
//     genderFemale: true,//boolean
// }
exports.getQueriedNames = async (req, res) => {
    try {
        const { searchTerm, genderMale, genderFemale } = req.query;
        const names = await NameModel.find({
            $or: [
                { meaning: { $regex: searchTerm, $options: 'i' } },
                // { meaningKeywords: searchTerm },
                { genderMale: genderMale },
                { genderFemale: genderFemale },
            ],
        });
        res.send(names);
    } catch (e) {
        res.status(500).send(e.message);
    }
};

// query: {
//     genderMale: true,//boolean
//     genderFemale: true,//boolean
// }
exports.getRandomName = async (req, res) => {
    try {
        const { genderMale, genderFemale } = req.query;
        const names = await NameModel.find({
            genderMale: genderMale,
            genderFemale: genderFemale,
        });
        const randomIndex = Math.floor(Math.random() * names.length);
        res.send(names[randomIndex]);
    } catch (e) {
        res.status(500).send(e.message);
    }
};

exports.getNameByParam = async (req, res) => {
    const searchedName = req.params.name;
    try {
        const name = await NameModel.findOne({ name: searchedName });
        res.send(name);
    } catch (e) {
        res.status(500).send(e.message);
    }
};
