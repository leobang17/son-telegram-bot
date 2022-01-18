import { EntityType, Message } from "./interfaces/telegramInterfaces";

export const messageHandler = async (params: any) => {
    const { update_id, message }: { update_id: number, message: Message} = params;
    
    // command 
    if (message.entities) {
        entityHandler(message);
    }
    // image

    // poll

    // 

    
    
}


export const memberStatusHandler = async <T>(params: T) => {
    
}


const entityHandler = (message: Message) => {
    const content: string = message.text as string;
    const parsedList: string[] | null = entityParser(content);

    for (let entity of message.entities!) {
        console.log(entity);
        switch (entity.type) {
            case EntityType.BOT_COMMAND: 
                commandHandler(message);
                break;
        }
    }
}

const entityParser = (content: string): string[] => {
    const contentList: string[] = content.split(" ");
    const regex: RegExp = /^\/[a-z0-9]+$/i;
    const parsedList: string[] = new Array();

    for (let contentIter of contentList) {
        const regexRes: RegExpExecArray | null = regex.exec(contentIter);
        if (regexRes) {
            parsedList.push(regexRes[0]);
        }
    }

    return parsedList;
};

const commandHandler = (message: Message) => {
    const content: string = message.text as string;
    
    
}