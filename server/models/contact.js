//models-contact.js-Aafaq Muzaffar-300190210-2022-10-30
let mongoose = require('mongoose');

// create a model class
let contactModel = mongoose.Schema({
    contactName: String,
    contactNumber: Number,
    emailAddress: String
},
{
    collection: "contacts"
});

module.exports = mongoose.model('Contact', contactModel);