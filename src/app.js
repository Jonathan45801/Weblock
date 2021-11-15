
import './App.css';
import Home from './Component/pages/index';
import SigninPage from './Component/pages/signin';
import LoginPage from './Component/pages/login';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
function App() {
  return (
    <>
   <Router>
     <Routes>
       <Route path='/' element={<Home/>} exact/>
         <Route path="/signin" component={SigninPage}/>
         <Route path="/login" component={LoginPage}/>
     </Routes>
   </Router>
   </>
  );
}

export default App;
