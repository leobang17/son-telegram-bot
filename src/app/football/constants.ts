import { LeagueInterface, TeamInfoInterface, LeagueType } from "./interfaces";


const TEAM: TeamInfoInterface = {
    ManchesterUnited: {
        id: 33
    },
    Arsenal: {
        id: 42
    },
    Newcastle: {
        id: 34
    },
    Watford: {
        id: 38 
    },
    Wolves: {
        id: 39
    },
    Liverpool: {
        id: 40
    },
    Southampton: {
        id: 41
    },
    Burnley: {
        id: 44
    },
    Everton: {
        id: 45
    },
    Leister: {
        id: 46
    },
    Tottenham: {
        id: 47
    },
    WestHam: {
        id: 48
    },
    Chelsea: {
        id: 49
    },
    ManchesterCity: {
        id: 50
    },
    Brighton: {
        id: 51
    },
    CrystalPalace: {
        id: 52
    },
    Brentford: {
        id: 55
    },
    Leeds: {
        id: 63
    },
    AstonVilla: {
        id: 66
    },
    Norwich: {
        id: 71
    }
}

const LEAGUE: LeagueInterface = {
    "PL": {
        id: 39,
        type: LeagueType.League
    },
    "LeagueCup": {
        id: 48,
        type: LeagueType.Cup
    },
    "FACup": {
        id: 45,
        type: LeagueType.Cup
    },
}

export default {
    TEAM,
    LEAGUE,
}