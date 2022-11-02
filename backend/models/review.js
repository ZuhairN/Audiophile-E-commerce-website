import { Schema, model } from "mongoose";

const reviewSchema = new Schema({
    body: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        min: 1,
        max: 5,
        required: true
    }
})

export default model('Review', reviewSchema)