import { useState, useEffect } from 'react'
import { ChatInput } from './components/ChatInput'
import ChatMessages from './components/ChatMessages'
import { Chatbot } from 'supersimpledev'
import './App.css'

   

    
        
 function App(){
            const [chatMessages, setChatMessages] = useState([])
            const [isLoading, setIsLoading] = useState(false);

             useEffect(() => {
                 Chatbot.addResponses({
                    "hello": "Hi there! How can I help you today?",
                    "Hi":"Hi there! How can I help you today?",
                    "what is your name": "I'm your friendly chatbot!",
                    "What is your favorite game":"I love playing chess",
                    "what is the time" : function getCurrentTime() {
                                         return new Date().toLocaleTimeString()}
                })
             }, [])
            
        
            
            return(
                    <div id='container'>
                        
                        <ChatMessages 
                            chatMessages={chatMessages}
                            isLoading={isLoading}
                            
                        />

                        <ChatInput 
                            chatMessages={chatMessages} 
                            setChatMessages={setChatMessages}
                            isLoading={isLoading}
                            setIsLoading={setIsLoading}
                            />
                        

                    

                </div>
            )
        
        }
        


export default App
