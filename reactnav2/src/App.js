import {BrowserRouter as Router,Routes,Route,Link,NavLink} from 'react-router-dom'
import DashBoard from './components/DashBoard';
function App(){
  return(
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/dash' element={<DashBoard/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App;