import React, { Component } from 'react';
import Card from 'react-bootstrap/Card'
import CardGroup from'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';
import foodImage from '../images/food.jpg';
import img1 from'../images/image.jpg';
import  img2 from '../images/images.jpg';
import S8 from '../images/galle-ex.jpg';


export default class Home extends Component {

    render() {
        return(
          <div>
              <h1 align="center">WELCOME TO SRILANKA IN APRIL</h1><br/>

             <center>< Card.Img src={S8} alt={"logo"} style={{width:"60%",height:"10%",}} /></center><br/>

                <center><Button variant="primary">PLAN FOR APRIL</Button><br/></center><br/>

              <CardGroup>
                  <Card>
                      <Card.Img variant="top" src={foodImage} style={{width:"100%"}} />
                      <Card.Body>
                          <Card.Title>Awurudu Foods in Sri Lanka</Card.Title>
                          <Card.Text>
                              This is a wider card with supporting text below as a natural lead-in to
                              additional content. This content is a little bit longer.
                          </Card.Text>
                          <center><Button variant="primary">PLAN FOR APRIL</Button><br/></center><br/>
                      </Card.Body>
                      <Card.Footer>
                          <small className="text-muted">Last updated 3 mins ago</small>
                      </Card.Footer>
                  </Card>
                  <Card>
                      <Card.Img variant="top" src={img1} style={{width:"100%"}} />
                      <Card.Body>
                          <Card.Title>Gangaramaya Holds its beauty</Card.Title>
                          <Card.Text>
                              This card has supporting text below as a natural lead-in to additional
                              content.{' '}
                          </Card.Text>
                          <center><Button variant="primary">SEE MORE</Button><br/></center><br/>
                      </Card.Body>
                      <Card.Footer>
                          <small className="text-muted">Last updated 3 mins ago</small>
                      </Card.Footer>
                  </Card>

              </CardGroup>;
          </div>
        );
    }


}