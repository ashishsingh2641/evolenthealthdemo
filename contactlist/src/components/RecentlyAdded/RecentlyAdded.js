import React, { Component } from 'react';
import Cards from './subComponents/Cards/Cards';

class RecentlyAdded extends Component {
    constructor(props){
        super(props);
        this.state = {
            items: [] 
        }
    }
    componentDidMount() {
        fetch('/api/recentlyadded')
        .then(res => res.json())
        .then(data => this.setState({items: [...data]}))
        .catch(() => {
            console.log("not able to load data from ajax");
            console.log('loading data from mock json');
        });
    }
    render() {
    return (
      <div className="row">
        <div className="col-12">
            <Cards items={this.state.items} />
        </div>
      </div>
    );
  }
}

export default RecentlyAdded;
