var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var TaskSchema = new Schema({
    name: {
        type: String,
        required: 'Kindly Enter the name of the Task'
    },
    CreatedDate: {
        type: Date,
        default: Date.now
    },
    status: {
        type: [{
            type: String,
            enum: [`pending`, `ongoing`, `completed`]
        }],
        default: ['pending']
    }
})

module.exports = mongoose.model("taskschema", TaskSchema);

// let newMakan = new Makan({
//     name: "Ivan Firmanda"
// })

// newMakan.save(function (err, product) {
//     if (err) throw err;
//     console.log("Berhasil");

// })