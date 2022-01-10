import updateService from "./updateService";


const getUserId = async ( params : any ) => {
    const chatId: number = params.message.from.id;
    try {
        const getChatIdRes = await updateService.getByUserId(chatId);
        
        if (!getChatIdRes) {
            await updateService.insertUserId(chatId);
            console.log("Successfully Inserted!");
        }
        return getChatIdRes;

    } catch (err) {
        console.error(err);
    }
};

const getAllUserId = async () => {
    try {
        const getAllUserIdRes = await updateService.getAllUserId();
        
        return getAllUserIdRes;
    } catch (err) {
        console.error(err);
    };
}


export {
    getUserId,
    getAllUserId,
}