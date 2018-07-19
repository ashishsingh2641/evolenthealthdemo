import React, {Component} from 'react';
import './CheckBox.css';

class CheckBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isChecked: props.checked
        };
        this.toggleCheckbox = this.toggleCheckbox.bind(this);
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            isChecked: nextProps.checked
        });
    }
    toggleCheckbox = () => {
        this.setState({
            isChecked: !this.state.isChecked
        });
    }
    render () {
        const props = this.props;
        return (
            <div className="CustomCheckbox" onChange={this.toggleCheckbox}>
                <input 
                    type="checkbox" 
                    id={props.id} 
                    checked={this.state.isChecked}  
                    onChange={this.toggleCheckbox} 
                    value={props.label}
                    />
                <label 
                    htmlFor={props.id} 
                    >{props.label}</label>
            </div>
        );
    }
}

export default CheckBox;
