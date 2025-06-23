import Product from "../models/products.model.js";
import mongoose from "mongoose";

export const getProducts = async(req, res) => { 
    try {
        let product = await Product.find({})
        res.status(200).json({success:true, data: product})
    } catch (error) {
        console.log("server error ", error.message);
        res.status(404).json({success: false, message: "products not found"})
    }
}

export const addProduct = async(req, res) => {
    const product = req.body
    if(!product.name || !product.type || !product.description || !product.images[0] || product.images.length < 1 ){
        return res.status(400).json({success: false, message: "Please enter all the details"})
    }
    const newProduct = new Product(product)
    try {
        await newProduct.save()
        res.status(201).json({success:true, data : newProduct})
    } catch (error) {
        console.log("server error", error.message);
        res.status(500).json({success: false, message: "server error"})
    }
  
}

export const getOneProduct = async(req, res) => {
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(404).json({success: false, message: "Product not found"})
    }
    try {
        const oneProduct = await Product.findById(id)
        res.status(200).json({success:true, data: oneProduct})
    } catch (error) {
        console.log("server error ", error.message);
        res.status(500).json({success: false, message: "server error"})
    }
}


export const deleteProduct = async(req, res) => {
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(404).json({success: false, message: "Product not found"})
    }
    try {
        await Product.findByIdAndDelete(id);
        res.status(200).json({success:true, message: "Product is deleted"})
    } catch (error) {
        console.log("server error ", error.message);
        res.status(500).json({success: false, message: "server error"})
    }
}