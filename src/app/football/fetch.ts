import FootballAPI from ".";
import { FixtureParams, EventParams } from "./interfaces";

const getFixture = async (params: FixtureParams) => {
    try {
        const res = await FootballAPI.get('/fixtures', { params });
        return res.data;        
    } catch (err) {
        console.error(err);
    }
};

const getEvents = async (params: EventParams) => {
    try {
        const res = await FootballAPI.get('/fixtures/events', { params });
        return res.data;
    } catch (err) {
        console.error(err);
    };
}


export {
    getFixture,
    getEvents,
}