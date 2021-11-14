
import './App.css';
import Home from './Component/pages/index';
import SigninPage from './Component/pages/signin';
import LoginPage from './Component/pages/login';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
function App() {
  return (
    <>
   <Router>
     <Switch>
       <Route path='/' component={Home}exact/>
         <Route path="/signin" component={SigninPage}/>
         <Route path="/login" component={LoginPage}/>
     </Switch>
   </Router>
   </>
  );
}

export default App;
