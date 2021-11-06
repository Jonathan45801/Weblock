
import './App.css';
import Home from './Component/pages/index';
import SigninPage from './Component/pages/signin';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
function App() {
  return (
    <>
   <Router>
     <Switch>
       <Route path='/' component={Home}exact/>
         <Route path="/signin" component={SigninPage}/>
     </Switch>
   </Router>
   </>
  );
}

export default App;
