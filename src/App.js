// import from 'react';
// import ReactDOM from 'react-dom';
// import  App from './App';
//
import Navbar from './components/Navbar';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import Signup from './components/pages/Signup';
import MyTechnicalServices from './components/pages/MyTechnicalServices';

function App() {
  return (
    <>
    <Router>
     <Navbar/>
     <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/Services' 
        render={() => (window.location = "https://github.com/munazchat/SECURE_PAYMENT_PRO_SYS")}

        />
        {/* <button class="icon list arrow left" 
      onClick={() => {
        window.location = "https://google.com"

   }}>Go Back</button> */}
        
        <Route path='/products' render={() => (window.location = "https://github.com/munazchat/Restaurant_Service_APP")}/>
        <Route path='/signup' component={Signup}/>
        <Route path='/mytechnicalservices' component={MyTechnicalServices}/>
     </Switch>
     </Router>
    </>
  );
}

export default App;
