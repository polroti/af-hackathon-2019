import React,{Component} from "react";
import {BrowserRouter as Router,Route,Link} from "react-router-dom";

export default class  Them extends Component{

     render(){
         return(
             <Router>
             <div>
                 <h2> Do you have any theme?</h2>

                 <Link to="/" >Tradition </Link>
                 <Link to="/nature">Nature</Link>
             </div>
             </Router>

         );
     }




}