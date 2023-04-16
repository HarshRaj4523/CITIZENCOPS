const mongoose = require("mongoose");



const complainSchema = new mongoose.Schema(
    {
        citizenid: String,
        type: String,
        date: Date,
        subject: String,
        description: String,
        flag: Boolean
    }
);

const Complain = new mongoose.model("Complain", complainSchema);


module.exports = Complain;
