import React, { Component } from 'react';
import {Navbar} from 'react-bootstrap';
import {Nav} from 'react-bootstrap';
//import {NavDropdown} from 'react-bootstrap';
import {FormControl} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import {Form} from 'react-bootstrap';

import {BrowserRouter as Router,Route,Link} from "react-router-dom";
import Home from'./component/home';
import AprilSpecial from'./component/special';
import Plan from './component/planATrip';






import './App.css';


class App extends Component {

  render() {

          return(
              <Router>
              <div >


                  <br />
                  <Navbar bg="primary" variant="dark">
                      <Navbar.Brand><h4>TRAVEL SRILANKA</h4></Navbar.Brand>
                      <Nav className="mr-auto">
                          <Link to="/" style={{textDecoration:'none', color:'white'}}><b>HOME</b></Link>&nbsp;&nbsp;&nbsp;
                          <Link to="/spacial"style={{textDecoration:'none', color:'white'}} ><b>APRIL SPECIAL  </b></Link>&nbsp;&nbsp;&nbsp;

                          <Link to="/plan"style={{textDecoration:'none', color:'white'}}  ><b>PLAN A TRIP  </b></Link>&nbsp;&nbsp;&nbsp;
                      </Nav>
                      <Form inline>
                          <FormControl type="text" placeholder="Search place" className="mr-sm-2" />
                          <Button variant="outline-light">Search</Button>
                      </Form>
                  </Navbar>

                  <br />

              </div>

                  <Route path="/" exact component={Home}/>
                  <Route path="/spacial"  component={AprilSpecial}/>
                  <Route path="/plan"  component={Plan}/>

              </Router>
          );

      }

}

export default App;
