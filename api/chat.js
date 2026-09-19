import supabase from './supabase.js';

// Funções para gerenciar mensagens de chat
export const getChatMessages = async () => {
    const { data, error } = await supabase
        .from('chat')
        .select('*');
    return { data, error };
};

export const sendChatMessage = async (message) => {
    const { data, error } = await supabase
        .from('chat')
        .insert([{ content: message }]);
    return { data, error };
};