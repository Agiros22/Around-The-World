import axios from 'axios';

let baseURL; 

baseURL = 'http://127.0.0.1:8000/';

// if(process.env.REACT_APP_ENVIRONMENT && process.env.REACT_APP_ENVIRONMENT === "PRODUCTION") {
//     baseURL = process.env.REACT_APP_API_BASE_URL;
// }else {
//     baseURL = "127.0.0.1:3000", "localhost:3000"
// }

const api = axios.create({
    baseURL : baseURL,
    header: {
        "Content-Type" : "application/json"
    }
}) 

export default class API {
    getPlaces = async (search, category) => {
        let url = "/places";
        let query = new URLSearchParams();
        if (search) {
            query.append('search', search);
        }
        if (category) {
            query.append("category", category);
        } 

        const places = await api 
        .get(url) 
        .then(response => {
            return response.data;
        })
        .catch(err => {
            throw new Error(err);
        }) 
        return places
    } 
    getCategories = async () => {
        const categories = await api 
        .get('/categories')
        .then(res => {
            return res.data;
        })
        .catch(err => {
            throw new Error(err);
        });
        return categories;
    }
}