import React, {Component} from 'react';
import DataService from './DataService';

import './HomeComponent.css';

class HomeComponent extends Component {

    constructor() {
        super();
        this.state = {
            records: []
        }
    }

    render() {
        DataService.allTrainees().then(value => {
            this.setState({records: value.data});
        });

        return (
            <table id="table" className="table mt-2 mx-auto">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th className="text-center">Operations</th>
                    </tr>
                </thead>
                <tbody>
                {
                    this.state.records.map((r, i) => {
                        return (
                            <tr key={i}>
                                <td>{r.id}</td>
                                <td>{r.firstName}</td>
                                <td>{r.lastName}</td>
                                <td className="text-center">
                                    <input type="button" className="btn btn-light mr-1" value="Details" onClick={
                                        (event) => {
                                            console.log("do details");
                                        }
                                    }/ >
                                    <input type="button" className="btn btn-success mr-1" value="Update" onClick={
                                        (event) => {
                                            window.location = "update";
                                        }   
                                    }/ >
                                    <input type="button" className="btn btn-danger" value="Delete" onClick={
                                        (event) => {
                                            DataService.deleteTrainee(r.id);
                                        }   
                                    }/ >
                                </td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
        )
    }
}

export default HomeComponent;