import React, { Component } from 'react'
import { Grid, Cell} from 'react-mdl';
import {CardColumns, Card} from 'react-bootstrap';

export default class contact extends Component {
  render() {
    return (
      <div className="page-body">
        <Grid className="contact-grid">
          <Cell col={12}>
            <div className="header">
              <h2 style={{textAlign: 'center'}}>Contact Me</h2>
              <hr/>
            </div>
            <div className="contact-list">
              <CardColumns>
                <Card style={{border: 'none'}}>
                  <Card.Img 
                    variant="top" 
                    className="contact-card-img" 
                    src="http://pluspng.com/img-png/phone-png-contact-methods-phone-icon-512x512-pixel-image-925-512.png"
                  />
                  <Card.Footer className="pt-1 pl-2 pr-2">+370 646 54329</Card.Footer>
                </Card>
                <Card  style={{border: 'none'}}>
                  <Card.Img 
                    variant="top" 
                    className="contact-card-img" 
                    src="https://img.pngio.com/free-icons-png-iconmonstr-email-4-icon-email-png-black-512_512.png"
                  />
                  <Card.Footer className="pt-1 pl-2 pr-2">modestas612@gmail.com</Card.Footer>
                </Card>
                <Card  style={{border: 'none'}}>
                  <Card.Img 
                    variant="top" 
                    className="contact-card-img" 
                    src="https://www.searchpng.com/wp-content/uploads/2019/02/Location-Icon-PNG-200x200.png"
                  />
                  <Card.Footer className="pt-1 pl-2 pr-2">Vilnius</Card.Footer>
                </Card>
              </CardColumns>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}