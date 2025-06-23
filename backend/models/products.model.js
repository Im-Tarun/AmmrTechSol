import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name : {
        type: String,
        required: true
    },
    type:{
        type: String,
        required:true
    },
    description : {
        type: String,
        required: true
    },
    images : {
        type: [String],
        default:[],
    },

    })

const Product = mongoose.model("Product", productSchema);
export default Product