import axios from "axios";
import dotenv from 'dotenv';

dotenv.config();

// axios config
axios.defaults.headers.common['x-apisports-key'] = process.env.API_KEY as string;
axios.defaults.headers.common['content-type'] = 'application/x-www-form-urlencoded';


interface GetDataParams {
    team: number;
    season: number;
    timezone: string;
};

const mufcParams: GetDataParams = {
    team: 39,
    season: 2021,
    timezone: "Asia/Seoul",
}


const getData = async (params: GetDataParams) => {
    try {
        const res: any = await axios.get("https://v3.football.api-sports.io/fixtures?team=39&season=2021", { params });
        const data = res.data.response;
        const teams: string[] = new Array;
        data.map((d: any) => {
            const name: string = d.league.name;
            if (!teams.includes(name)) {
                teams.push(name);
            };
        })

        console.log(teams)
        
    } catch(err) {
        console.error(err);
    }
};

export default getData;