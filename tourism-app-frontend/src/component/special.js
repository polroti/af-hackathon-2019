import React, { Component } from 'react';
import Card from 'react-bootstrap/Card'
import CardDeck from'react-bootstrap/CardDeck';
import S1 from '../images/awurudu.jpg';
import S2 from '../images/east.jpg';
import S3 from '../images/hatton.jpg';
import S4 from '../images/galle awurudu.jpg';
import S5 from '../images/santa claus SL.jpg';
import S6 from '../images/nallur ther.jpg';
import S7 from '../images/worldsend.jpg';
export default class Special extends Component{

    render(){
        return(
            <div>
                <h2 align="center">Let's WelCome April</h2><br/>
                <p align="center"> In april visit sri lanka to embrace the cultures of Sinhala & Tamil New Year and Vesak!</p><br/>

                <CardDeck>
                    <Card>
                        <Card.Img variant="top" src={S1} />
                        <Card.Body>
                            <Card.Title>New Year Celebrations in Anuradhapura</Card.Title>
                            <Card.Text>
                                This new year, Anuradhapura, the historical city of Sri Lanka welcomes the new year with a great
                                celebration
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Last updated 4 mins ago</small>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={S2} />
                        <Card.Body>
                            <Card.Title>East coast and new year</Card.Title>
                            <Card.Text>
                               The eastern part of the island celebrates the Sinhala and Tamil New Year with a great bang!
                               Variety of activities including the Awurudu Sports and Customs are presented in an event organized
                                by the Navy of sri lanka
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Last updated Just Now</small>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={S3} />
                        <Card.Body>
                            <Card.Title>Special Pooja and Ther in Hatton</Card.Title>
                            <Card.Text>
                               Ther (Lord's Vehicle) is carried around the town and presented among the people
                               for worship and blessings and for the betterment of the working class in the hill-country!
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Last updated 2 mins ago</small>
                        </Card.Footer>
                    </Card>

                    <Card>
                        <Card.Img variant="top" src={S4} />
                        <Card.Body>
                            <Card.Title>Awurudu gets life in Galle</Card.Title>
                            <Card.Text>
                               Galle celebrates awurudu!
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>
                </CardDeck> <br/>
                <h3>People who made this plan also liked this ...</h3>
                <br/>
                <br/>
                <CardDeck>
                    <Card>
                        <Card.Img variant="top" src={S5} />
                        <Card.Body>
                            <Card.Title>Santa Claus Sri Lanka</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Last updated 12 mins ago</small>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={S6} />
                        <Card.Body>
                            <Card.Title>Arohara! Jaffna and Nallur Ther</Card.Title>
                            <Card.Text>
                                This card has supporting text below as a natural lead-in to additional
                                content.{' '}
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Last updated 9 mins ago</small>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={S7} />
                        <Card.Body>
                            <Card.Title>Best time to see the end!</Card.Title>
                            <Card.Text>
                               Visit World's End in Horton Plains to experience the breathtaking views of the
                               mist and clouds
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>

                </CardDeck>;

            </div>
        );
    }
}