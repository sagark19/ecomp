import react from 'react'
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { Footer,Header} from './components/index'
import { Container} from 'react-bootstrap'
import {HomeScreen} from './screens/HomeScreen'
import {ProductScreen} from './screens/ProductScreen'

const App:React.FC = () => {
  return (
    <Router>
    <Header />
    <main className='py-3'>
    <Container>
      <Route path ='/' component={HomeScreen} exact/>
      <Route path ='/product/:id' component={ProductScreen} />
    </Container>
    </main>
    <Footer />
    </Router>
  );
}

export default App
