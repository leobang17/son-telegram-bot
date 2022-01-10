import updateService from "./updateService";


const insertUserId = async ( params : any ) => {
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

const deleteUserId = async ( params: any ) => {
    const userId: number = params.message.from.id;

    try {
        const getChatIdRes = await updateService.getByUserId(userId);
        
        if (getChatIdRes) {
            await updateService.deleteUserId(userId);
            console.log("Successfully deleted!");
        } else {
            console.log("없는 유저");
        }
    } catch (err) {
        console.error(err);
    }
}


export {
    insertUserId,
    getAllUserId,
    deleteUserId,
}