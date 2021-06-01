import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import CardDeck from "react-bootstrap/CardDeck";
import t1 from "../images/an.jpg";
import t2 from "../images/download (1).jpg";
import t3 from "../images/download.jpg";
import t4 from "../images/Party_Dream_Color_party.jpg";

export default class PlanATrip extends Component {
  render() {
    return (
      <div>
        <h1 align="center">SELECT YOUR TRAVEL THEME</h1>
        <br />
        <CardDeck>
          <Card>
            <Card.Img variant="top" src={t1} />
            <Card.Body>
              <Card.Title>Ancient Cities</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
                <br />
                <center>
                  {" "}
                  <Button variant="danger">Ancient Cities</Button>
                </center>
              </Card.Text>
            </Card.Body>
            <Card.Footer></Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src={t3} />
            <Card.Body>
              <Card.Title>Religious Places</Card.Title>
              <Card.Text>
                This card has supporting text below as a natural lead-in to
                additional content. <br />
                <center>
                  {" "}
                  <Button variant="danger">Religious Places</Button>
                </center>
              </Card.Text>
            </Card.Body>
            <Card.Footer></Card.Footer>
          </Card>
        </CardDeck>
        ;
        <CardDeck>
          <Card>
            <Card.Img variant="top" src={t2} />
            <Card.Body>
              <Card.Title>Nature Life</Card.Title>
              <Card.Text>
                This card has supporting text below as a natural lead-in to
                additional content. <br />
                <center>
                  {" "}
                  <Button variant="danger">Nature Life</Button>
                </center>
              </Card.Text>
            </Card.Body>
            <Card.Footer></Card.Footer>
          </Card>

          <Card>
            <Card.Img variant="top" src={t4} />
            <Card.Body>
              <Card.Title>Party Places</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This card has even longer content
                than the first to show that equal height action.
                <br />
                <center>
                  {" "}
                  <Button variant="danger">Party Places</Button>
                </center>
              </Card.Text>
            </Card.Body>
            <Card.Footer></Card.Footer>
          </Card>
        </CardDeck>
        ;
      </div>
    );
  }
}
