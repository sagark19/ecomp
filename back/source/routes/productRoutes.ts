import express from 'express';
import  { addProduct, getProducts}  from '../controllers/productController';

const router = express.Router();

router.post('/addproduct',addProduct);
router.get('/getproducts', getProducts);

export default router;