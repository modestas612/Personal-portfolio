import React, { Component } from 'react';
import {Grid, Cell} from 'react-mdl';
import { Link } from 'react-router-dom';

export default class landingPage extends Component {
  render() {
    return (
      <div className="comp-body">
        <Grid className="landing-grid">
          <Cell col={12} className="vertical-center">
            <h1>HELLO!</h1>
            <h2>Looking for a Developer?</h2>
            <h4>Look no more. I'm a Front-end & Java developer.</h4>
            <button>
              <Link className="about-me" to="/aboutme">Learn more about me!</Link>
            </button>
          </Cell>
        </Grid>
      </div>
    )
  }
}
