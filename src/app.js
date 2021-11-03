
import './App.css';
import Home from './Component/pages/index';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
function App() {
  return (
    <>
   <Router>
     <Home/>
     <Switch>
       {/* <Route path='/' exact component={NavBar}>
       </Route> */}
     </Switch>
   </Router>
   </>
  );
}

export default App;
