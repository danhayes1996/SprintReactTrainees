import React, {Component} from 'react';
import DataService from './DataService';
import UserFormComponent from './UserFormComponent';

class UpdateComponent extends Component {

    updateTrainee(){
        const inputs = document.getElementsByClassName('inputs');
        const userData = {};

        for(let i = 0; i < inputs.length; i++){
            userData[inputs[i].id] = inputs[i].value;
        }

        DataService.updateTrainee(userData).then(value => console.log(value));
        window.location = "home";
    }

    render(){
        return (
            //pass userid? or use sessionstorage??
            <UserFormComponent btnText="Update" btnFunc={this.createTrainee} />
        );
    }
}

export default UpdateComponent;