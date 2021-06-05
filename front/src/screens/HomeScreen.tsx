import {Row,Col} from 'react-bootstrap'
import products from '../product'
import {Product } from '../components/index'



export const HomeScreen: React.FC = () => {
    return (
        <div>
            <Row>
                {
                    products.map(product =>(
                        <Col sm={12} md={6} lg={4} xl={3}>
                        <Product {...product}/>
                        </Col>
                    ))
                }
            </Row>
        </div>
    )
}

