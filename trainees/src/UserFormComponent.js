import React, {Component} from 'react';
import './CreateComponent.css';

class UserFormComponent extends Component {

    render(){
        return (
            <div className="card col-sm-5 mx-auto mt-2">
                <div className="my-2 d-flex justify-content-center">
                    <div className="text-right mr-2">
                        <p className="mt-2">First Name:</p>
                        <p className="mt-3">Last Name:</p>
                        <p className="mt-3">City:</p>
                    </div>
                    <div className="">
                        <input id="firstName" type="text" className="inputs form-control mb-2" value={this.props.firstName}/>
                        <input id="lastName" type="text" className="inputs form-control mb-2"value={this.props.lastName}/> 
                        <input id="city" type="text" className="inputs form-control mb-2"value={this.props.city}/> 
                    </div>
                </div>
                <input type="button" value={this.props.btnText} onClick={this.props.btnFunc} className="btn btn-success mb-2"/>
            </div>
        );
    }
}

export default UserFormComponent;