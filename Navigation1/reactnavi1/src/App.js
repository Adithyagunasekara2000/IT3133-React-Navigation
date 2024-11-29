import {BrowserRouter as Router,Routes,Route,Link,NavLink} from 'react-router-dom';
import Home from './components/Home'
import ContactUs from './components/ContactUs'
import AboutUs from './components/AboutUs'

function App(){
  return(
<>
<Router>
  <nav>
    <ul>
      <li><Link to="/home">Home</Link></li>
      <li><Link to="/about">AboutUs</Link></li>
      <li><Link to="/contact">ContactUs</Link></li>
    </ul>
  </nav>
  <Routes>
    <Route path='/home' element={<Home/>}/>
    <Route path='/contact' element={<ContactUs/>}/>
    <Route path='/about' element={<AboutUs/>}/>
  </Routes>
</Router>
</>
  )
}
export default App;