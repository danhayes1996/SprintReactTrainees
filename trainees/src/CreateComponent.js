import React, {Component} from 'react';
import DataService from './DataService';
import UserFormComponent from './UserFormComponent';

class CreateComponent extends Component {

    createTrainee(){
        const inputs = document.getElementsByClassName('inputs');
        const userData = {};

        for(let i = 0; i < inputs.length; i++){
            userData[inputs[i].id] = inputs[i].value;
        }

        DataService.createTrainee(userData).then(value => console.log(value));
        window.location = "home";
    }

    render(){
        return (
            <UserFormComponent btnText="Create" btnFunc={this.createTrainee} />
        );
    }
}

export default CreateComponent;