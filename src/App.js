import logo from './logo.svg';
import './App.css';
import Addproduct from './Addproduct';
import Editproduct from './Editproduct';
import Productlist from './Productlist';
import Notfound from './Notfound';
//import { BrowserRouter as Router, Switch, Route, Link,NavLink } from 'react-router-dom';  

import Table from './Table'

function App() {
  return (
    // <Router>  
    //   <div className="container">  
    //     <nav className="navbar navbar-expand-lg navheader">  
    //       <div className="collapse navbar-collapse" >  
    //         <ul className="navbar-nav mr-auto">  
    //           <li className="nav-item">  
    //             <NavLink to={'/Addproduct'} exact activeStyle={{color: 'red'}} className="nav-link">AddProducts</NavLink>  
    //           </li>  
    //           <li className="nav-item">  
    //             <NavLink to={'/Productlist'} exact activeStyle={{color: 'red'}} className="nav-link">Products List</NavLink>  
    //           </li>  
    //         </ul>  
    //       </div>  
    //     </nav> <br />  
    //     <Switch>  
    //       <Route exact path='/Addproduct' component={Addproduct} />  
    //       <Route path='/Editproduct/:id' component={Editproduct} />  
    //       <Route path='/Productlist' component={Productlist} /> 
    //       <Route component={Notfound}/>
    //     </Switch>  
    //   </div>  
    // </Router>  
    <div>
      <Productlist/>
    </div>
  )
}

export default App;
