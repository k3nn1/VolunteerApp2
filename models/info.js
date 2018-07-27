const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const infoSchema = new Schema({
    organization: { type: String, required: true},
    coordinator: String,
    email: { type: String, lowercase: true, required: true},
    phone: { type: String},
    location: { type: String, required: true},
    description: String,
    link: String
});

const Info = mongoose.model("Info", infoSchema);

module.exports = Info;
