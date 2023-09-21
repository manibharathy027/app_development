import './assets/css/App.css';
import Login from './components/login';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Signup from './components/signup';
function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/Login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
        </Routes>
      </Router>
    
       
    </div>
  );
}

export default App;