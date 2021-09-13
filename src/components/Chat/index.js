
import  { useEffect, useState } from "react";
import axios from "axios";
import fakeapi from "../../services/fakeapi";



import { ChatEngine, getOrCreateChat } from "react-chat-engine";

import { MainContainer } from "./styles";


const Chat = () => {

    
    const token = JSON.parse(localStorage.getItem("@comictrader:token")) || "";
  
    const id = JSON.parse(localStorage.getItem("ID") )|| "";

    
    const [owner,setOwner]= useState("");
    
  
    const [FriendsList,setFriendsList] = useState(JSON.parse(localStorage.getItem("lista de amigos")) || "");
    
   
    const [names,setNames]= useState(JSON.parse(localStorage.getItem("lista de nomes")) || "");
  
    function createDirectChat(creds) {
      let list = [];

      
     
     const callback = (list)=> console.log()
        if(creds !== null){
  
          for(let i = 0; i < names?.length;i++){
              if(!list.includes(names[i])){
                list.push(names[i])
                getOrCreateChat(
                  creds,
                  { is_direct_chat: true, usernames: [names[i]] },
                  callback
                  );
                } 
          }
        }
      
    }
  
    useEffect(()=>{
      let config = {
        method: 'get',
        url: 'https://api.chatengine.io/users',
        headers: {
          'PRIVATE-KEY': '{{1b8dc6f9-1ebd-4b08-a01a-44441efbc356}}'
        },
      };
      
      axios(config)
      .then(function (response) {
        localStorage.setItem("lista de amigos", JSON.stringify(response.data))
        localStorage.setItem("lista de nomes", JSON.stringify(FriendsList?.map((usuarios)=> usuarios.username).filter((usuarios)=> usuarios !== localStorage.getItem("userName") )) || "")
      })
      .catch(function (error) {
        console.log(error);
      });
  
      
    
     
     
      
    },[FriendsList])

    const headers = { headers: { Authorization: `Bearer ${token}` } };
    
        
        useEffect(()=>{
            if( id !== null){

                fakeapi.get(`users/${id}`, headers).then((response) => {
                    JSON.stringify(localStorage.setItem("userName",response.data.name));
                  });
            }
    }


,[])
  
 
  
    
    
  
    function renderChatForm(creds) {
  
      return<>
       
        
        {createDirectChat(creds)}
        
      </>
      
        
      
    }
    
    return (<>
        
            <MainContainer>
      { FriendsList?.length !== 0 && <ChatEngine
     height="75vh"
    
   userName={localStorage.getItem("userName")}
     userSecret="123"
   projectID="cac113a4-0610-42c2-9059-144b1634d1b4"
     renderNewChatForm={(creds) => renderChatForm(creds)}
  />}
            </MainContainer>
        
        </>     
    );
}

export default Chat;