import React, {Component} from 'react';
import CheckBox from './SubComponents/CheckBox/CheckBox';
import OverLayModel from './SubComponents/OverLayModel/OverLayModel';
import './Card.css';

class Card extends Component {
    constructor(props){
        super(props);
        this.state = {
            showCheckBox: false,
            Name: props.FirstName + ' ' +props.LastName,
            FirstName: props.FirstName,
            LastName: props.LastName,
            email: props.email,
            number: props.number,
            displayState: 'none'
        }
        this.diplsyCheckBox = this.diplsyCheckBox.bind(this);
        this.displayPlaceholder = this.displayPlaceholder.bind(this);
        this.HandleChange = this.HandleChange.bind(this);
        this.OpenOverLay = this.OpenOverLay.bind(this);
        this.closeOverLay = this.closeOverLay.bind(this);
        this.SubmitHandler = this.SubmitHandler.bind(this);
        this.ClearHandler = this.ClearHandler.bind(this);
    }
    addConatct = () => {
        alert('hi');
    }
    SubmitHandler = (event) => {
        this.setState({
            FirstName: this.state.FirstName,
            LastName: this.state.LastName,
            email: this.state.email,
            number: this.state.number,
            Name: this.state.FirstName + this.state.LastName
        });
        if (this.state.FirstName === '' || this.state.LastName === '' || this.state.email === '' || this.state.number === '') {
            this.setState({
                displayState: 'block'
            });
            alert('please enter all field value');
        } else {
            this.setState({
                displayState: 'none'
            });
        }
    }
    ClearHandler = () => {
        this.setState({
            displayState: 'none'
        })
    }
    HandleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    OpenOverLay = (e) => {
        e.stopPropagation();
        this.setState({
            displayState: 'block'
        });
    }
    closeOverLay = (e) => {
        e.stopPropagation();
        this.setState({
            displayState: 'none'
        })
    }
    diplsyCheckBox = () => {
        this.setState({
            showCheckBox: true,
        });
    }
    displayPlaceholder = () => {
        this.setState({
            showCheckBox: false,
        });
    }
    render() {
        const state = this.state;
        const props = this.props;
        const placeholder = state.Name.charAt(0);
        let component;
        if (state.showCheckBox === true) {
            component = (
                <div className="row py-2">
                    <div className="col-sm-1">
                        <CheckBox />
                    </div>
                    <div className="col-sm-2 text-left small mt-4 my-sm-0">{state.Name}</div>
                    <div className="col-sm-2 text-left small">{'+91' + state.number}</div>
                    <div className="col-sm-3 text-sm-center small">{state.email}</div>
                    <div className="col-sm-4 text-right">
                        <div className="d-flex flex-row-reverse">
                            <div className="col-2">
                                <i className="material-icons cursor" id={state.Name} onClick={props.deleteComponent}>close</i>
                            </div>
                            <div className="col-2">
                                <div className="mytooltip">
                                    <i className="material-icons">star</i>
                                    <span className="tooltiptext small">set as favorites</span>
                                </div>
                            </div>
                            <div className="col-2">
                                <i className="material-icons mr-2" onClick={this.OpenOverLay}>edit</i>
                            </div>
                        </div>
                    </div>
                </div>
            )
        } else {
            component = (
                <div className="row py-2">
                    <div className="name_placeholder col-1">
                        <span className={props.bgColor}>
                            {placeholder}
                        </span>
                    </div>
                    <div className="col-sm-2 text-left small mt-4 my-sm-0">{state.Name}</div>
                    <div className="col-sm-2 text-left small">{'+91' + state.number}</div>
                    <div className="col-sm-3 text-sm-center small">{state.email}</div>
                    <div className="col-sm-2 text-right" />
            </div>
            );
        }
        return (
        <div className="row Card_view" id={props.FirstName}>
            <div className="col-12">
                <div className="card p-2" onMouseEnter={this.diplsyCheckBox} onMouseLeave={this.displayPlaceholder}>
                    {component}
                </div>
                <OverLayModel 
                    displayState={this.state.displayState}
                    closeOverLay={this.closeOverLay}
                    Name={state.Name}
                    SubmitHandler={this.SubmitHandler}
                    ClearHandler={this.ClearHandler}
                    HandleChange={this.HandleChange}
                    FirstName={state.FirstName}
                    LastName={state.LastName}
                    email={state.email}
                    number={state.number} />
            </div>
        </div>
        );
    }
}

export default Card;
