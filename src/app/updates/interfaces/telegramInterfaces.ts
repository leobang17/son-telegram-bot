interface Update {
    update_id: number;
    message?: Message;
    edited_message?: EditedMessage;
    my_chat_member?: ChatMemeberUpdated;
}

interface Message {
    message_id: number;
    date: number;
    from?: User;
    sender_chat?: Chat;
    text?: string;
    entities?: MessageEntity[];
    caption?: string;
}

interface EditedMessage {
    
}

interface ChatMemeberUpdated {
    chat: Chat;
    from: User;
    date: number;
    old_chat_member: ChatMember;
    new_chat_member: ChatMember;
    invite_link?: any;
}

interface User {
    id: number;
    is_bot: boolean;
    first_name: string;
    last_name?: string;
    username?: string;
    language_code?: string;
    can_join_groups?: boolean;
    can_read_all_group_messages?: boolean;
    supports_inline_queries?: boolean;
}

interface Chat {
    id: number;
    type: ChatType;
    title?: string;
    username?: string;
    first_name?: string;
    last_name?: string;    
}

interface ChatMember {
    user: User;
    status: MemeberStatus;
    
}

interface MessageEntity {
    type: EntityType,
    offset: number;
    length: number;
}


enum ChatType {
    PRIVATE = "private",
    GROUP = "group",
    SUPER_GROUP = "supergroup",
    CHANNEL = "channel",
}

enum EntityType {
    MENTION = "mention",
    HASHTAG = "hashtag",
    CASHTAG = "cashtag",
    BOT_COMMAND = "bot_command",
    EMAIL = "email",
    PHONE_NUMBER = "phone_number",
    BOLD = "bold",
    ITALIC = "italic",
}

enum MemeberStatus {
    OWNER = "creator",
    ADMINISTRATOR = "administrator",
    MEMBER = "member",
    RESTRICTED = "restricted",
    LEFT = "left",
    BANNED = "kicked",

};