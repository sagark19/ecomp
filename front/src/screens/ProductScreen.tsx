import {  RouteComponentProps } from 'react-router-dom'
import { Col,Row,Image,ListGroup,ListGroupItem, Card, Button} from 'react-bootstrap'
import {Rating} from '../components/Rating'
import { useEffect } from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { productDetails }  from '../state/actions/product.ActionCreators'
import { RootState } from '../store'
import { Loader } from '../components/loader'
import { Message } from '../components/Message'


interface routingProps {
    id: string
}

interface IProduct {
    loading?: boolean
    product?: {
                name: string
                image: string
                description:string
                brand:string
                category:string
                price:string
                countInStock:number
                rating:number
                numReviews:number
                }
    error? : string | {}
}



export const ProductScreen:React.FC<RouteComponentProps<routingProps>>= ({ match }) => {
    const dispatch = useDispatch()
    const productData = useSelector((state : RootState)=> state.productDetails)
    const {loading, product, error } : IProduct = productData;
   useEffect(() => {
       dispatch(productDetails(match.params.id))
   }, [dispatch,match])

        return (
            
            <div>
                {loading ? <Loader /> : error ? <Message variant='danger'>{error}</Message> : 
                
                <Row>
                    <Col md={6}>
                        <Image src={product?.image} fluid></Image>
                    </Col>
                    <Col md={3}>
                        <ListGroup variant='flush'>
                            <ListGroupItem>
                                <h3>
                                    {product?.name}
                                </h3>
                            </ListGroupItem>
                            <ListGroupItem>
                                <Rating rating ={product?.rating!} numbReview = {product?.numReviews!} color = 'yellow' />
                            </ListGroupItem>
                            <ListGroupItem>
                            Price - ${product?.price}
                            </ListGroupItem>
                            <ListGroupItem>

                            Description :{product?.description}
                            </ListGroupItem>
                        </ListGroup>
                    </Col>
                    <Col md={3}>
                        <Card>
                            <ListGroup variant='flush'>
                                <ListGroupItem>
                                    <Row>
                                        <Col>
                                        Price
                                        </Col>
                                        <Col>
                                        <strong>
                                        $ {product?.price}
                                        </strong>
                                        </Col>
                                    </Row>
                                </ListGroupItem>
                                <ListGroupItem>
                                    <Row>
                                        <Col>
                                        Status
                                        </Col>
                                        <Col>
                                        <strong>
                                        { product?.countInStock  &&  product?.countInStock > 0 ? 'In Stock' : 'Out Of Stock'}
                                        </strong>
                                        </Col>
                                    </Row>
                                </ListGroupItem>
                                <ListGroupItem disabled={product?.countInStock === 0}>
                                <Button type="button" className="btn btn-lg btn-primary">Add To Cart</Button>
                                </ListGroupItem>

                            </ListGroup>
                        </Card>
                    </Col>
                </Row>
                }
                
            </div>
        )
}

