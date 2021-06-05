import { Card } from 'react-bootstrap'
import { Rating } from './index'
import {Link} from 'react-router-dom'

interface Product {
    _id: string
    name: string
    image: string
    description: string
    brand: string
    category: string
    price: number
    countInStock: number
    rating: number
    numReviews: number
}

export const Product:React.FC<Product> = (product) => {
    return (
        <Card className='my-3 p-3 rounded'>
            <Link to ={`/product/${product._id}`}>
                <Card.Img src = {product.image}/>
            </Link>
            <Card.Body as='div'>
            <Link to={`/product/${product._id}`}>
                <Card.Title><strong>
                    {product.name}
                    </strong></Card.Title>
            </Link>
            <Card.Text as='div'>
                <div className='my-3'>
                    {/* {product.rating} from {product.numReviews} reviews */}
                    <Rating rating ={product.rating} numbReview = {product.numReviews} color = 'yellow'/>
                </div>
            </Card.Text>
            <Card.Text as='h3'>
                ${product.price}
            </Card.Text>
            </Card.Body>
        </Card>
    )
}



