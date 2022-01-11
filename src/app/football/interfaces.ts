
export interface FixtureParams {
    team: number,
    season: number,
    timezone?: string,    
}

export interface EventParams {
    fixture: number,
    team?: number,
    player?: number,
    live?: boolean
}

export interface LineupParams {
    fixture: number,
    team?: number,
    player?: number,
}

export interface TeamInfoInterface {
    [team: string]: {
        id: number,
        
    }
}

export interface LeagueInterface {
    [league: string]: {
        id: number,
        type: LeagueType,
    }
}


// Enums 
export enum LeagueType {
    League = "League",
    Cup = "Cup",
}

export enum TimeZoneType {
    Seoul = "Asia/Seoul",
}