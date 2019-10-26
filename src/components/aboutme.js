import React, { Component } from 'react'
import {Grid, Cell} from 'react-mdl';
import { Link } from 'react-router-dom';
import foto from '../img/pic.jpg';
import pdf from '../pdf/CV.pdf';

export default class aboutme extends Component {
  render() {
    return (
      <div className="page-body">
        <Grid className="page-grid">
          <Cell col={5}>
            <img src={foto} alt="profile foto"  className="profile-pic"/>
          </Cell>
          <Cell col={7}>
          <div className="header">
            <h2 style={{textAlign: 'center'}}>ABOUT ME</h2>
            <hr/>
          </div>
          <div className="content">
            <p>As a developer with one years of experience writing code for applications and websites, I have a strong attention to detail as I know that even the simplest error can lead to lost production.</p>
            <p>I am highly-motivated, self-driven, hard-working, fast learner. I eager to be a part of the team, learn new technologies, become a valuable employee of the company and bring it success.</p>
            <p>Well-organized with an ability to prioritize tasks, develop and grow in the company. Experienced in communicating with the team and clients. Attentive and accurate to details.</p>
          </div>
          <div className="footer">
            <div className="social-links">
              <button className="btn"><Link className="btn-contact" to="/contact">Contact me</Link></button>
              <a target="_blank" rel="noopener noreferrer" className="btn" href={pdf}>cv</a>
            </div>
            <div className="social-links">
              <a href="https://www.linkedin.com/in/modestas-%C5%A1%C4%97%C5%BEa-082b93144/" rel="noopener noreferrer" target="_blank">
                <i className="fa fa-linkedin-square" aria-hidden="true" />
              </a>
              <a href="https://github.com/modestas612" rel="noopener noreferrer" target="_blank">
                <i className="fa fa-github-square" aria-hidden="true" />
              </a>
            </div>
          </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}
