import express from "express";
import { addProduct, deleteProduct, getProducts, getOneProduct } from "../controllers/product.controller.js";


const router = express.Router()

router.get('/', getProducts);
router.get('/get/:id', getOneProduct);
router.post('/', addProduct);
router.delete('/:id', deleteProduct);

export default router