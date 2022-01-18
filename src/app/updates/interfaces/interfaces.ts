// interfaces
export interface sendPhotoAPIParams {
    chatId: number,
    photo: string,
    caption?: string,
    parseMode?: string,
}

export interface sendMessageAPIParams {
    chatId: number,
    text: string,
    parseMode?: string,
};

export interface EventParams {
    [type: string]: {
        url: string,
        content: string,
    }
}


// enums
export enum Commands {
    Start = "/start",
    Exit = "/exit",
};

export enum MemberStatus {
    Blocked = "kicked",
};

