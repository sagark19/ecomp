import { Request,Response} from 'express';
import  Product  from '../models/productModel'

export const addProduct = async (req:Request,res:Response) => {
    const { name , image, description ,brand, category, price, countInStock, rating, numReviews}=req.body;
    let productData = new Product({
        name,
        image,
        description,
        brand,
        category,
        price,
        countInStock,
        rating,
        numReviews,
    });

    try{
        const createdProduct = await productData.save();
        res.status(201).json(createdProduct)
    }catch(error){
        console.log('error',error)
    }
}

export const getProducts = async (req:Request,res:Response) => {
    
    try{
        const products = await Product.find({});
        res.status(201).json(products)
    }catch(error){
        res.status(404).json(error)
        console.log('error',error)
    }
}