import axios from 'axios';

class DataService {
    allTrainees(){
        return axios.get(`http://localhost:8080/all`);
    }

    getTrainee(id){
        return axios.get(`http://localhost:8080/get/${id}`)
    }

    deleteTrainee(id){
        return axios.delete(`http://localhost:8080/delete/${id}`)
    }

    createTrainee(trainee) {
        return axios.post(`http://localhost:8080/create`, trainee);
    }
}

export default new DataService();