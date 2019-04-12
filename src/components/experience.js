import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Experience extends Component {
  render() {
    return(
      <Grid>
        <Cell col={4}>
          <p>{this.props.startMonth}{this.props.startYear} - {this.props.endMonth}{this.props.endYear}</p>
        </Cell>
        <Cell col={8}>
          <div style={{textAlign: 'justify'}}>
            <h4 style={{marginTop:'0px'}}>{this.props.jobName}</h4>
            <h6 style={{fontWeight: 'bold'}}>{this.props.company}</h6>
            <p style={{whiteSpace: 'pre-line'}}>{this.props.jobDescription}</p>
          </div>
        </Cell>
      </Grid>
    )
  }
}

export default Experience;
