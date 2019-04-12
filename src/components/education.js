import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';



class Education extends Component {

  render() {
    return(
      <Grid>
        <Cell col={4}>
          <p>{this.props.startMonth}{this.props.startYear} - {this.props.endMonth}{this.props.endYear}</p>
        </Cell>
        <Cell col={8}>
          <div>
            <h4 style={{marginTop:'0px', textAlign: 'left'}}>{this.props.schoolName}</h4>
            <h6 style={{fontWeight: 'bold', textAlign: 'left'}}>{this.props.diploma}</h6>
            <p style={{whiteSpace: 'pre-line'}}>{this.props.schoolDescription}</p>
          </div>
        </Cell>
      </Grid>
    )
  }
}

export default Education;
