const mongoose = require("mongoose");
const { Schema } = mongoose.Schema;
const recipeSchema = new Schema({
    category_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    ingredients: {
        type: String,
        required: true
    },
    instructions: {
        type: String,
        required: true
    },

    video: {
        type: String,
        required: true
    }

})

module.exports = mongoose.model('Recipe', recipeSchema);