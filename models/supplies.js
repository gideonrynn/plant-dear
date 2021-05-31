const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const suppliesSchema = new Schema({
    item: {
        type: String,
    },
    quantity: {
        type: String,
    },
    dimensions: {
        type: String
    },
    weight: {
        type: Date,
    },
    description: {
        type: String
    },
    order: {
        type: String
    },
    cost: {
        type: Decimal128
    },
    links: {
        type: Array
    },
    notes: {
        type: String
    },
    createdAt: {
        type: Date
    },
    updatedAt: {
        type: Date
    }
})

const Supplies = mongoose.model("Supplies", taskSchema);

module.exports = Supplies;