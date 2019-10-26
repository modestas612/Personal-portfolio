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
            Using the latest technologies and software (JavaScript, HTML, CSS, Java and Spring boot), designed and developed several small user-friendly websites and applications;
            Designed and developed screens with HTML5, CSS3 and Bootstrap, JS, JQuery;
            Experienced in responsive design for and web development projects;
            Good Understanding of design principles, user interfaces and Web standards;
            Developed Database for the application;`}
          />

          <Education
            startMonth="Sep, "
            startYear={2015}
            endMonth="Jun, "
            endYear={2018}
            schoolName="Kaunas Technical College"
            diploma="Professional bachelor degree of road engineering."
            schoolDescription=
            {`Activities and societies:
            Led and worked in groups as a group monitor for 3 years consistently throughout collage. Excellent problem-solving skills and strong attention to details gained in a wide variety of environments.

            Learned to:
            Prepared road, road structures and bridge designs;
            Perform estimate calculations and geodetic measurements;
            Evaluate construction products, plan, organise and technically supervise the works of road construction, reconstruction or repair.
            Basics of Structural Calculation;`}
          />
        </div>
      )
    } else if (this.state.activeTab === 1) {
      return (
        <div>
          <Experience
            startMonth="Jul, "
            startYear={2019}
            endMonth="Present"
            jobName="Junior Java Developer"
            company="Edrana Baltic"
            jobDescription=
            {`Development of new functionality of Profit-Web business management system using Java and other technologies.
            Technologies and tools: Java, Maven, SonarQube, Gitlab, JavaScript, AJAX, Spring, Eclipse, Tomcat.
            Database: Oracle, MS SQL Server, Firebird.
            `}
          />
          <Experience
            startMonth="Feb, "
            startYear={2019}
            endMonth="Jul, "
            endYear={2019}
            jobName="Web Developer"
            company="Self-employed"
            jobDescription=
            {`Programming: Entry level experience in programing with HTML, CSS, JavaScript, Java; familiar with Spring boot and React JS; 
            Software Tools and Utilities: Experienced in using Eclipse, IntelliJ IDEA, GIT, GitHub, CMD; 
            Database Technologies: Entry level experience implementing and managing MySQL database and using MySQL workbench 
            Created my own portfolio with React JS;
            GIT/Stash as a repository for the application project folders.
            `}
          />
          <Experience
            startMonth="Aug, "
            startYear={2017}
            endMonth="Jul, "
            endYear={2018}
            jobName="Technician"
            company="UAB Kelprojektas"
            jobDescription=
            {`Experienced in project development with SCRUM methodology. Participated in weekly team meetings with managers; provided drafts and reports on the progress of the projects; gained responsibility for self-organizing; 
            `}
          />
        </div>
      )
    } else if (this.state.activeTab === 2) {
      return (
        <div>
          <Skills
            skill="Web Design"
            progress={60}
          />
          <Skills
            skill="HTML/CSS/JS"
            progress={80}
          />
          <Skills
            skill="React js"
            progress={30}
          />
          <Skills
            skill="Object-Oriented Programming (OOP)"
            progress={50}
          />
          <Skills
            skill="Java"
            progress={70}
          />
          <Skills
            skill="Spring"
            progress={25}
          />
          <Skills
            skill="MySQL"
            progress={60}
          />
          <Grid style={{position: 'relative'}}>
            <Cell col={2}>
              <div style={{display: 'flex', textAlign: 'left'}}>Software Tools and Utilities:</div>
            </Cell>
            <Cell col={10}>
              <div style={{ margin: 'auto', 
                            width: '80%', 
                            position: 'absolute', 
                            top: '50%', 
                            transform: 'translateY(-50%)'}}>
                            Git, Github, Eclipse, Jquery, Intellij IDEA, Maven, Bootstrap, Hibernate, AJAX, Tomcat, Oracle Database, Paint.NET, Gradle, Agile Environment, Yarn, Sonarqube, Gitlab, Firebird, FlameRobin.
              </div>
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
