import { Container,Row,Col } from 'react-bootstrap'
export const Footer:React.FC = () => {
    return (
        <footer>
          <Container>
            <Row>
                <Col className='text-center py-3'>Copyright &copy; The Art Store</Col>
            </Row>
        </Container>
        </footer>
      
    )
}

