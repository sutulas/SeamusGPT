import React, { useState, useEffect, useRef } from 'react';
import './ChatInterface.css';

const ChatInterface = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const formatTimestamp = () => {
        const now = new Date();
        return now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!input.trim()) return;

        // Add user message
        const userMessage = { 
            text: input, 
            sender: 'user',
            timestamp: formatTimestamp()
        };
        setMessages(prev => [...prev, userMessage]);
        setIsLoading(true);
        setInput('');

        try {
            const response = await fetch('http://localhost:5000/api/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ prompt: input }),
            });

            const data = await response.json();
            
            // Add bot response
            setMessages(prev => [...prev, { 
                text: data.response, 
                sender: 'bot',
                timestamp: formatTimestamp()
            }]);
        } catch (error) {
            console.error('Error:', error);
            setMessages(prev => [...prev, { 
                text: 'Sorry, there was an error processing your request.', 
                sender: 'bot',
                timestamp: formatTimestamp()
            }]);
        }

        setIsLoading(false);
    };

    return (
        <div className="chat-container">
            <div className="chat-messages">
                {messages.map((message, index) => (
                    <div key={index} className={`message ${message.sender}`}>
                        <div className="message-content">
                            {message.text}
                        </div>
                        <div className="timestamp">{message.timestamp}</div>
                    </div>
                ))}
                {isLoading && (
                    <div className="message bot thinking">
                        <div className="thinking-dots">
                            <div className="dot"></div>
                            <div className="dot"></div>
                            <div className="dot"></div>
                        </div>
                    </div>
                )}
                <div ref={messagesEndRef} />
            </div>
            <form onSubmit={handleSubmit} className="chat-input-form">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Type your message..."
                    disabled={isLoading}
                />
                <button type="submit" disabled={isLoading}>
                    {isLoading ? 'Sending...' : 'Send'}
                </button>
            </form>
        </div>
    );
};

export default ChatInterface; 