import React, { Component } from 'react';
import './OverLayModel.css';

class OverLayModel extends Component {
    constructor(props){
        super(props);
        this.SubmitHandler = this.SubmitHandler.bind(this);
    }
    SubmitHandler = (e) => {
        e.stopPropagation();
        this.props.SubmitHandler(e);
    }
  render() {
      const props = this.props; 
    return (
      <div>
        <div id="overlay" className="model" style={{display: props.displayState}}>
            <div className="model-content">
                <div className="model-header d-block w-100 p-4">
                    <i className="material-icons close" onClick={props.closeOverLay}>close</i>
                    <h4 className="float-left">Update Contact</h4>
                </div>
                <div className="model-body p-4">
                    <form className="row text-left">
                        <div className="col-6">
                            <div className="form-group">
                                <label htmlFor="exampleInputFirstName">First Name</label>
                                    <input 
                                        onChange={props.HandleChange}
                                        type="text" 
                                        className="form-control" 
                                        id="exampleInputFirstName" 
                                        placeholder="Enter Name"
                                        name="FirstName"
                                        value={props.FirstName} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail">Email</label>
                                    <input 
                                        onChange={props.HandleChange}
                                        type="email" 
                                        className="form-control" 
                                        id="exampleInputEmail" 
                                        placeholder="Enter Name"
                                        name="email"
                                        reuired="true"
                                        value={props.email} />
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="form-group">
                                <label htmlFor="exampleInputLastName">Last Name</label>
                                    <input 
                                        name="LastName"
                                        onChange={props.HandleChange}
                                        type="text" 
                                        className="form-control" 
                                        id="exampleInputLastName" 
                                        placeholder="Last Name" 
                                        value={props.LastName} />
                            </div>
                            
                            <div className="form-group">
                                <label htmlFor="exampleInputNumber">Phone Number</label>
                                    <input 
                                        name="number"
                                        onChange={props.HandleChange}
                                        type="text" 
                                        className="form-control" 
                                        id="exampleInputNumber" 
                                        placeholder="Enter phone number" 
                                        value={props.number} />
                            </div>
                            
                        <div className="row">
                            <div className="col-sm-6 mx-auto">
                                <button type="button" className="btn btn-danger mr-2" onClick={this.SubmitHandler}>
                                    submit
                                </button>
                                <button type="button" className="btn btn-warning" onClick={props.ClearHandler}>
                                    cancle
                                </button>
                            </div>
                        </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>          
      </div>
    );
  }
}

export default OverLayModel;
