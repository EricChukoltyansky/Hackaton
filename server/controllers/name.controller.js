const NameModel = require('../models/name.model');

const getAllNames = async (__, res) => {
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
const getQueriedNames = async (req, res) => {
    try {
        const { genderMale, genderFemale } = req.query;
        const searchTerm = decodeURI(req.query.searchTerm);
        console.log(searchTerm);

        // { meaningKeywords: searchTerm },
        const queryArray = [{ meaning: { $regex: searchTerm, $options: 'i' } }];
        if (genderMale) {
            queryArray.push({ genderMale: genderMale });
        }
        if (genderFemale) {
            queryArray.push({ genderFemale: genderFemale });
        }

        const names = await NameModel.find({
            $and: queryArray,
        });
        console.log('queried names:', names.length);
        res.send(names);
    } catch (e) {
        res.status(500).send(e.message);
    }
};

exports.getNames = async (req, res) => {
    if (req.query) {
        getQueriedNames(req, res);
    } else {
        getAllNames(req, res);
    }
};

// query: {
//     genderMale: true,//boolean
//     genderFemale: true,//boolean
// }
exports.getRandomName = async (req, res) => {
    try {
        const { genderMale, genderFemale } = req.query;
        const queryArray = [];
        if (genderMale) {
            queryArray.push({ genderMale: genderMale });
        }
        if (genderFemale) {
            queryArray.push({ genderFemale: genderFemale });
        }
        const names = await NameModel.find({
            $and: queryArray,
        });
        console.log('random names:', names.length);
        const randomIndex = Math.floor(Math.random() * names.length);
        res.send(names[randomIndex]);
    } catch (e) {
        res.status(500).send(e.message);
    }
};

exports.getNameByParam = async (req, res) => {
    const searchedName = decodeURI(req.params.name);
    console.log(searchedName);
    try {
        const name = await NameModel.findOne({ name: searchedName });
        res.send(name);
    } catch (e) {
        res.status(500).send(e.message);
    }
};
