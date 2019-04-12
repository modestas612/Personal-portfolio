import React, { Component } from 'react'
import { Card } from 'react-bootstrap';
import {Button} from 'react-mdl';

export default class card extends Component {
    render() {
        return (
            <Card>
                <Card.Img variant="top" src={this.props.background}/>
                <Card.Title className="pl-2 pr-2"><h4>{this.props.title}</h4></Card.Title>
                <Card.Text className="pl-2 pr-2">{this.props.description}</Card.Text>
                <Card.Footer>
                    <Button target="_blank" href={this.props.github} colored>GitHub</Button>
                    <Button target="_blank" href={this.props.website} colored>Website</Button>
                </Card.Footer>
            </Card>
        )
    }
}