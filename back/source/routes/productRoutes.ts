import express from 'express';
import  { addProduct, getProducts, getProductDetails}  from '../controllers/productController';

const router = express.Router();

router.post('/addproduct',addProduct);
router.get('/getproducts', getProducts);
router.get('/getproductdetails/:id', getProductDetails);


export default router;