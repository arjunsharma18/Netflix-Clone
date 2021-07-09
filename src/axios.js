import axios from "axios";
//to make req. to  movie database
const instance =axios.create({
    baseURL:"https://api.themoviedb.org/3",
});

export default instance;