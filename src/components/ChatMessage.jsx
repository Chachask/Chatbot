import dayjs from "dayjs"
import RobotProfileImage from "../assets/robot.png"
import UserProfileImage from "../assets/user.png"
import './ChatMessage.css'
 // Chat message component
        export function ChatMessage({message, sender, time})
        {
            // Destructuring
            //const message = props.message
            //const sender = props.sender
            //const {message, sender} = props;

            return(
                   <div className={sender === "user" ? "message user-message" : "message robot-message"}>
                      
                        {sender === "robot" && <img src={RobotProfileImage} style={{
                                                                    height: '45px',
                                                                    width: '45px',        // needed — border-radius: 45px on a non-square image won't look like a circle
                                                                    borderRadius: '45px',
                                                                    objectFit: 'cover'
                                                            }}  />}
                        <div className="variety">
                        <span className="bubble">{message}
                        <div className="timestamp">{dayjs(time).format("h:mma")}</div>
                        </span>
                        </div>
                        {sender === "user" && <img alt="User profile"
                                                    style={{
                                                                    height: '45px',
                                                                    width: '45px',        // needed — border-radius: 45px on a non-square image won't look like a circle
                                                                    borderRadius: '45px',
                                                                    objectFit: 'cover'
                                                            }} 
                                                    src={UserProfileImage}/>}
                        

                        
                    </div>
        )
        
        }