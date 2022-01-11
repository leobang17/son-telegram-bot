import FootballAPI from ".";
import { FixtureParams } from "./interfaces";

const getFixture = async (params: FixtureParams) => {
    try {
        const res = FootballAPI.get('/fixtures', { params });

        return res;        
    } catch (err) {
        console.error(err);
    }
};


export {
    getFixture,
}