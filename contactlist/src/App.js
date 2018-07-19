import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import Header from './components/Header/Header';
import ContactList from './components/ContactList/ContactList';
import ListComponent from './components/ListComponent/ListComponent';
import RecentlyAdded from './components/RecentlyAdded/RecentlyAdded';
import BlockContact from './components/BlockContact/BlockContact';
import './App.css';

const data = require('./data.json')

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Icon: 'menu',
      counter: 1,
      sideNav: 'sideNav',
      width: 0,
      SideMenu: '',
      Listmap: [...data],
      CardListConatiner: 'col-12'
    }
    this.toggleMenu = this.toggleMenu.bind(this);
  }
  toggleMenu = () => {
    this.setState({
      counter: this.state.counter + 1
    });
    if (this.state.counter % 2 === 0) {
      this.setState({
        Icon: 'close',
        sideMenu: '',
        CardListConatiner: 'col-12',
        width: '0',
        marginLeft: 0
      })
    } else {
      this.setState({
        Icon: 'menu',
        SideMenu: 'col-2 d-none d-lg-block fixed_Menu',
        CardListConatiner: 'col-9',
        width: '230px',
        marginLeft: '250px'
      })
    }
  }
  render() {
    const extraProps = 'you have not yet any blocked contacts';
    return (
      <Router>
      <div className="App">
        <header className="App-header">
         <Header toggleMenu={this.toggleMenu} Icon={this.state.Icon}/>
        </header>
        <div className="row">
          <div className={this.state.SideMenu}>
            <ContactList 
                Listmap={this.state.Listmap}
                sideNav={this.state.sideNav} 
                width={this.state.width}>
                <ListComponent />
              </ContactList>
          </div>
          <div id="main" className={this.state.CardListConatiner} style={{marginLeft: this.state.marginLeft}}>
          <div>
            <Route path="/" exact={true} component={HomePage} />
            <Route path="/recentlyadded" component={RecentlyAdded} />
            <Route path="/blockcontact" render={ (props) => (
              <BlockContact {...props} data={extraProps} />
            )} />
          </div>
        </div>
        </div>
      </div>
      </Router>
    );
  }
}

export default App;
