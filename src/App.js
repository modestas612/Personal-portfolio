import React, { Component } from 'react';
import {Layout, Header, Navigation, Content, Drawer} from 'react-mdl';
import { Link } from 'react-router-dom';
import Main from './components/main';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Layout className="layout-bg">
            <Header transparent title={<Link style={{textDecoration: 'none', color: 'white'}} to="/">Modestas Šėža</Link>}>
              <Navigation>
                <Link to="/aboutme">About</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/projects">Portfolio</Link>
                <Link to="/contact">Contact</Link>
              </Navigation>
            </Header>
            <Drawer reveal title={<Link style={{textDecoration: 'none', color: 'black'}} to="/">Modestas Šėža</Link>}>
              <Navigation>
                <Link to="/aboutme">About</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/projects">Portfolio</Link>
                <Link to="/contact">Contact</Link>
              </Navigation>
            </Drawer>
            <Content>
              <Main/>
            </Content>
        </Layout>
      </div>
    )
  }
}

export default App;
