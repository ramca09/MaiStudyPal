import { supabase } from "utils/supabase-client";

export const updateUserName = async (userId, userName) => {
    return await supabase.from('users').update({
        username: userName
    }).eq('id', userId).throwOnError();
}