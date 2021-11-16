
import './App.css';
import Home from './Component/pages/index';
import SigninPage from './Component/pages/signin';
import LoginPage from './Component/pages/login';
<<<<<<< HEAD
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
=======
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
>>>>>>> 5c7aacc23bec2d63b36136839bee5d9360f25c43
function App() {
  return (
    <>
   <Router>
     <Routes>
       <Route path='/' element={<Home/>} exact/>
         <Route path="/signin" component={SigninPage}/>
         <Route path="/login" component={LoginPage}/>
<<<<<<< HEAD
     </Routes>
=======
     </Switch>
>>>>>>> 5c7aacc23bec2d63b36136839bee5d9360f25c43
   </Router>
   </>
  );
}

export default App;
