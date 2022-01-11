
export interface FixtureParams {
    team: number,
    season: number,
    timezone?: string,    
}

export interface TeamInfoInterface {
    [team: string]: {
        id: number,
        
    }
}

export interface LeagueInterface {
    [league: string]: {
        id: number,
        type: "League" | "Cup",
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