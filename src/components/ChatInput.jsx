import { useState } from 'react'
import { Chatbot} from 'supersimpledev'
import dayjs from 'dayjs'
import "./ChatInput.css"
export function ChatInput({chatMessages, setChatMessages, isLoading, setIsLoading}) {
            const [inputText, setInputText] = useState("");
            
            
            function handleChange(e) {
                setInputText(e.target.value);
            }
            function handleKeyDown(event) {
                if (event.key === "Enter") {
                    event.preventDefault();
                    sendMessage();
                }if(event.key === "Escape"){
                    setInputText("");
                }
            }
            
            async function sendMessage() {
            setIsLoading(true);

            const time = dayjs().valueOf();
            const newChatMessage = [
                ...chatMessages,
                {
                    message: inputText,
                    sender: "user",
                    timestamp: time,
                    id: crypto.randomUUID(),
                    
                    
                }
            ];

            setChatMessages(newChatMessage);
            setInputText("");

            try {
                await new Promise(resolve => setTimeout(resolve, 3000)); // wait 3 sec
                const response = await Chatbot.getResponse(inputText);

                setChatMessages([
                    ...newChatMessage,
                    {
                        message: response,
                        sender: "robot",
                        timestamp: time,
                        id: crypto.randomUUID()
                       
                    }
                ]);

            } catch (error) {
                console.error("Chatbot API failed:", error);
            } finally {
                setIsLoading(false);
            }
        }
        return (
        <div className = 'display-con'>
            <div className="display">
                <input
                placeholder="Need help? Reach out to us"
                onChange={handleChange}
                value={inputText}
                onKeyDown={handleKeyDown}
            />

            <button onClick={sendMessage} disabled={isLoading}>
                    {isLoading ? "sending..." : "Send"}
            </button>
            
            </div>
        </div>
    );
}