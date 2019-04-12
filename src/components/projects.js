import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Button } from 'react-mdl';
import {CardColumns, Card} from 'react-bootstrap';
import Cards from './card';

import ComingSoonPage from '../img/ComingSoonPage.jpg';
import MineSweeper from '../img/MineSweeper.jpg';
import Portfolio from '../img/Portfolio.jpg';
import gallery from '../img/gallery.jpg';

export default class projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {

    if (this.state.activeTab === 0) {
      return (
        <CardColumns>
          <Cards 
            background={ComingSoonPage}
            title="Coming soon page"
            description=""
            github="https://github.com/modestas612/coming-soon-page"
            website="https://modestas612.github.io/coming-soon-page/"
          />
          <Cards 
            background={Portfolio}
            title="Portfolio template"
            description=""
            github="https://github.com/modestas612/portfolio"
            website="https://modestas612.github.io/portfolio/"
          />
          <Cards 
            background={MineSweeper}
            title="MineSweeper game"
            description=""
            github="https://github.com/modestas612/minesweeper"
            website="https://modestas612.github.io/minesweeper/"
          />
        </CardColumns>
      )
    } else if (this.state.activeTab === 1) {
      return (
        <CardColumns>
          <Card>
              <Card.Img variant="top" src={gallery}/>
              <Card.Title className="pt-1 pl-2 pr-2"><h4>Photo gallery</h4></Card.Title>
              <Card.Text className="pl-2 pr-2">Photo gallery is a simple Spring Boot application. Created using Maven and MySQL database.</Card.Text>
              <Card.Footer>
                  <Button target="_blank" href="https://github.com/modestas612/Photo-gallery" colored>GitHub</Button>
              </Card.Footer>
          </Card>          
        </CardColumns>
      )
    } 
  }
  
  render() {
    return (
      <div className="page-body">
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab style={{ color: 'white' }}>Front-End</Tab>
          <Tab style={{ color: 'white' }}>Java</Tab>
        </Tabs>
        <Grid>
          <Cell col={1}></Cell>
          <Cell col={10} className="page-grid">
            <div>{this.toggleCategories()}</div>
          </Cell>
          <Cell col={1}></Cell>
        </Grid>
      </div>
    )
  }
}
