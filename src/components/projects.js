import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell } from 'react-mdl';
import {CardColumns} from 'react-bootstrap';
import Cards from './card';

import ComingSoonPage from '../img/ComingSoonPage.jpg';
import MineSweeper from '../img/MineSweeper.jpg';
import Portfolio from '../img/Portfolio.jpg';
import gallery from '../img/gallery.jpg';
import Company from '../img/Company.jpg';

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
          <Cards 
            background={Company}
            title="The Company template"
            description=""
            github="https://github.com/modestas612/The-Company"
            website="https://modestas612.github.io/The-Company/"
          />
        </CardColumns>
      )
    } else if (this.state.activeTab === 1) {
      return (
        <CardColumns>
          <Cards 
            background={gallery}
            title="Photo gallery"
            description="Photo gallery is a simple Spring Boot application. Created using Maven and MySQL database."
            github="https://github.com/modestas612/Photo-gallery"
            website="https://mphoto.herokuapp.com/"
          />         
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
