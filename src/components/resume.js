import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';

export default class resume extends Component {

  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {

    if (this.state.activeTab === 0) {
      return (
        <div>
          <Education
            startMonth="Aug, "
            startYear={2018}
            endMonth="Feb, "
            endYear={2006}
            schoolName="UAB Baltic Institute of Technology"
            diploma="Professional qualification diploma"
            schoolDescription=
            {`Learned to:
            •	Develop small web applications using Java Spring boot, Thymeleaf;
            •	Troubleshoot various software issues using debugging process;
            •	Develop Database for the application;
            •	Design and develop screens with HTML5, CSS3 and Bootstrap, JS, React js;`}
          />

          <Education
            startMonth="Sep, "
            startYear={2015}
            endMonth="Jun, "
            endYear={2018}
            schoolName="Kaunas Technical College"
            diploma="Professional bachelor degree of road engineering."
            schoolDescription=
            {`Learned to:
            •	Prepare designs of road construction and reconstruction;
            •	Organise and technically supervise the works of bridge or road construction, reconstruction or repair;
            •	Perform estimate calculations and geodetic measurements;`}
          />
        </div>
      )
    } else if (this.state.activeTab === 1) {
      return (
        <div>
          <Experience
            startMonth="Aug, "
            startYear={2017}
            endMonth="Jul, "
            endYear={2018}
            jobName="Technician"
            company="UAB Kelprojektas"
            jobDescription=
            {`I have experience in project development with SCRUM methodology and responsibility for self-organizing. Learned to:
            •	Prepare design drawings using AutoCAD or similar type software;
            •	Analyze survey reports, maps, drawings, blueprints, topographical or geologic data.
            •	Calculations of outlay;
            `}
          />
        </div>
      )
    } else if (this.state.activeTab === 2) {
      return (
        <div>
          <Skills
            skill="HTML/CSS/JS"
            progress={80}
          />
          <Skills
            skill="React js"
            progress={20}
          />
          <Skills
            skill="Java"
            progress={60}
          />
          <Skills
            skill="Spring boot"
            progress={35}
          />
          <Skills
            skill="MySQL"
            progress={60}
          />
          <Grid>
            <Cell col={2}>
              <div style={{display: 'flex', textAlign: 'left'}}>Software Tools and Utilities:</div>
            </Cell>
            <Cell col={10}>
              <div style={{margin: 'auto', width: '90%'}}>Eclipse, IntelliJ IDEA, GitHub, Visual studio Code, Git CMD, Postman, MySQL workbench.</div>
            </Cell>
          </Grid>
        </div>
      )
    }

  }
  render() {
    return (
      <div className="page-body">
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab style={{ color: 'white' }}>Education</Tab>
          <Tab style={{ color: 'white' }}>Experience</Tab>
          <Tab style={{ color: 'white' }}>Skills</Tab>
        </Tabs>
        <Grid>
          <Cell col={2}></Cell>
          <Cell col={8} className="page-grid">
            <div className="project-content">{this.toggleCategories()}</div>
          </Cell>
          <Cell col={2}></Cell>
        </Grid>
      </div>
    )
  }
}
