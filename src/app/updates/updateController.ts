import updateService from "./updateService";


export const getChatId = async ( params : any ) => {
    const chatId: number = params.message.from.id;
    try {
        const getChatIdRes = await updateService.getChatId(chatId);
        
        if (!getChatIdRes) {
            await updateService.insertChatId(chatId);
            console.log("Successfully Inserted!");
        }
        return getChatIdRes;

    } catch (err) {
        console.error(err);
    }
};