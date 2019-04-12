import React, { Component } from 'react';
import {Grid, Cell} from 'react-mdl';
import { Link } from 'react-router-dom';

export default class landingPage extends Component {
  render() {
    return (
      <div className="comp-body">
        <Grid className="landing-grid">
          <Cell col={12} className="vertical-center">
            <h1>Hello! I'm Modestas Šėža</h1>
            <h4>JAVA & FRONTEND DEVELOPER</h4>
            <button>
              <Link className="about-me" to="/aboutme">Learn more about me!</Link>
            </button>
          </Cell>
        </Grid>
      </div>
    )
  }
}
