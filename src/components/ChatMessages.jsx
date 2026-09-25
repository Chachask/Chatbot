import { useRef, useEffect } from 'react'
import {ChatMessage} from "./ChatMessage"
import RobotProfileImage from "../assets/robot.png"
import LoadingSpinnerImage from '../assets/loading-spinner.gif'
import './ChatMessages.css'

function ChatMessages({chatMessages, isLoading}){
            const chatMessagesRef = useRef(null);
            useEffect(() => {
              const containerElem = chatMessagesRef.current;
            if(containerElem){
                containerElem.scrollTop = containerElem.scrollHeight // scroptop how far from the top should we scroll and scroll height the total height of the container
            }
            }, [chatMessages]);

            if (chatMessages.length === 0) {
                return <h2>Welcome to our chatbot project!</h2>;
            }
            
            return(

                <div className='messageList' ref={chatMessagesRef} >
                   {chatMessages.map((chatMessage)=> {
                            return (
                                <ChatMessage 
                                    message= {chatMessage.message} 
                                    sender={chatMessage.sender}
                                    key={ chatMessage.id}
                                    timestamp={chatMessage.timestamp}
                                />
    
                            );
                        })}
                    {isLoading && (
                    <>
                        <img src={RobotProfileImage} style={{
                                                                    height: '45px',
                                                                    width: '45px',        // needed — border-radius: 45px on a non-square image won't look like a circle
                                                                    borderRadius: '45px',
                                                                    objectFit: 'cover'
                                                            }}  />
                        <img src={LoadingSpinnerImage} style={{ width: '45px' }}  />
                        </>
                  )}
                        
            
                </div>
            )

        }

        export default ChatMessages;