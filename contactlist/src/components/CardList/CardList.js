import React, { Component } from 'react';
import OverLayModel from '../OverLayModel/OverLayModel';
import Cards from './subComponents/Cards/Cards';

class CardList extends Component {
    constructor(props){
        super(props);
        this.state = {
            items: [],
            FirstName: '',
            LastName: '',
            email: '',
            number: '',
            displayState: 'none',
        };
        this.closeOverLay = this.closeOverLay.bind(this);
        this.ClearHandler = this.ClearHandler.bind(this);
        this.SubmitHandler = this.SubmitHandler.bind(this);
        this.addContact = this.addContact.bind(this);
        this.HandleChange = this.HandleChange.bind(this);
    }
    componentDidMount() {
        fetch('/api/contactlist')
        .then(res => res.json())
        .then(data => this.setState({items: [...data]}))
        .catch(() => {
            console.log("not able to load data from fetch request");
        });
    }
    HandleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    addContact = () => {
        this.setState({
            displayState: 'block'
        });
    }
    SubmitHandler = (e) => {
        let obj = {
            bgColor: 'blue',
            FirstName: this.state.FirstName,
            LastName: this.state.LastName,
            email: this.state.email,
            number: this.state.number
        }
        if (this.state.FirstName === '' || this.state.LastName === '' || this.state.email === '' || this.state.number === '') {
            e.preventDefault();
            alert('please fill all the fields');
        } else {
            this.state.items.unshift(obj);
            this.setState({
                displayState: 'none'
            });
        }
            fetch('/api/contactlist', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(obj)
            })
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(data => console.log(`not be able to send data to backEnd ${data}`));
        
    }
    ClearHandler = () => {
        this.setState({
            displayState: 'none'
        })
    }
    closeOverLay = () => {
        this.setState({
            displayState: 'none'
        })
    }
    render() {
    return (
      <div className="row">
        <div className="col-12">
            <Cards items={this.state.items}
                addContact={this.addContact}
             />
            <OverLayModel
                FirstName={this.state.NewFirstName}
                LastName={this.state.NewLastName}
                email={this.state.email}
                closeOverLay={this.closeOverLay}
                HandleChange={this.HandleChange}
                SubmitHandler={this.SubmitHandler}
                ClearHandler={this.ClearHandler}
                displayState={this.state.displayState} />
        </div>
      </div>
    );
  }
}

export default CardList;
