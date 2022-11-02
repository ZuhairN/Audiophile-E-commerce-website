import { Schema, model } from "mongoose";

const productSchema = new Schema({
    productId: String,
    category: String,
    reviews: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Review'
        }
    ]
})

export default model('Product', productSchema);