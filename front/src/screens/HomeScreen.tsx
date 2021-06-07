import {Row,Col} from 'react-bootstrap'
import { useEffect } from 'react'
import {  useDispatch, useSelector} from 'react-redux'
import { listProducts } from '../state/actions/product.ActionCreators'
// import products from '../product'
import {Product } from '../components/index'
import { RootState } from '../store'
import { Message} from '../components/Message'
import { Loader} from '../components/loader'

interface IProductList {
        loading?: boolean
        products?: []
        error? : string | {}
}

export const HomeScreen: React.FC = () => {
const dispatch = useDispatch()
const productList = useSelector((state:RootState) => state.productList)
const { loading, error, products } :IProductList = productList
useEffect(() => {
    dispatch(listProducts())   
}, [dispatch])

// const products:[] =[];
    return (
        <div>
            {loading ? <Loader /> : error ? <Message variant='danger'>{error}</Message>:(
                <Row>
                {
                    products?.map(product =>(
                        <Col sm={12} md={6} lg={4} xl={3}>
                        <Product {...product}/>
                        </Col>
                    ))
                }
            </Row>

            )}
                    
        </div>
    )
}

