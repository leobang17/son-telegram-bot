import axios from "axios";
import dotenv from 'dotenv';

dotenv.config();

// axios config
const FootballAPI = axios.create({
    baseURL: 'https://v3.football.api-sports.io',
});

FootballAPI.defaults.timeout = 5000;
FootballAPI.defaults.headers.common['x-apisports-key'] = process.env.API_KEY as string;
FootballAPI.defaults.headers.common['content-type'] = 'application/x-www-form-urlencoded';


export default FootballAPI;