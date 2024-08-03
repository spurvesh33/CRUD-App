
const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema(
    {
        name: String,
        price: Number,
        mentor: String
    }
);

const studentModel = mongoose.model("courses",studentSchema)

module.exports = studentModel;
