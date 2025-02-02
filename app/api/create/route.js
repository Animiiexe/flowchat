import { StreamChat } from "stream-chat"


const api_key = 'a4rb5pwmxgcx';
const api_secret = 'mng4rxukwd7ubt4uqur6dkmqt6xmhkpznfq8a6amayrqntbfk9avf4aq3ajqw7cj';  
const user_id = 'user_2s1j3ODqID8tsdU8KaGhNHgiQqy';

export async function POST(request) {
    const serverClient = StreamChat.getInstance(api_key, api_secret);
    const user = await request.json();
    const token = serverClient.createToken(user.data.id);
    // console.log(token);
   
    console.log('new user has been created');
    return Response.json({ message: 'Hello World' })
  }