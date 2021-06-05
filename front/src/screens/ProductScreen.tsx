import {  RouteComponentProps } from 'react-router-dom'
import { Col,Row,Image,ListGroup,ListGroupItem, Card, Button} from 'react-bootstrap'
import  products  from '../product'
import {Rating} from '../components/Rating'

interface routingProps {
    id: string
}

export const ProductScreen:React.FC<RouteComponentProps<routingProps>>= ({ match }) => {
    const product = products.find( (product: { _id: string; })=> product._id === match.params.id )
    if(product){
        return (
            <div>
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
                                        {product.countInStock > 0 ? 'In Stock' : 'Out Of Stock'}
                                        </strong>
                                        </Col>
                                    </Row>
                                </ListGroupItem>
                                <ListGroupItem disabled={product.countInStock == 0}>
                                <Button type="button" className="btn btn-lg btn-primary">Add To Cart</Button>
                                </ListGroupItem>

                            </ListGroup>
                        </Card>
                    </Col>
                </Row>
                
            </div>
        )
        
    }
    else {
        return <h3> Page Not Found</h3>
    }
    
}

