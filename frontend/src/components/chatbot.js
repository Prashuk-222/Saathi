import React, { useState, useEffect, useRef } from "react";

const Chatbot = ({ props }) => {
    const [message, setMessage] = useState('');
    // const [buttonClicked, setButtonClicked] = useState(false);
    // const button = useRef(null);
    // ref={setButtonClicked}

    // useEffect(() => {
    //     const chat_box = document.getElementById('chat-box');
    //     if (button.current || message != '') {
    //         // buttonClicked.current.event.preventDefault();
    //         button.current.addEventListener('click', (e) => {
    //             e.preventDefault();
    //             const div = document.createElement('div');
    //             div.className = 'bot-message message-sent';
    //             const para = document.createElement('p');
    //             para.className = 'chat-message';
    //             para.innerText = message;
    //             div.appendChild(para);
    //             chat_box.appendChild(div);
    //         });
    //     }
    //     // setButtonClicked(false);
    //     console.log('button clicked!');
    // }, [])

    const handleClick = async (e) => {
        e.preventDefault();
        const chat_box = document.getElementById('chat-box');
        if (message != '') {
            const div = document.createElement('div');
            div.className = 'bot-message message-sent';
            const para = document.createElement('p');
            para.className = 'chat-message';
            para.innerText = message;
            div.appendChild(para);
            chat_box.appendChild(div);
            chat_box.scrollTop = chat_box.scrollHeight;
        }
        setMessage('');
        try {
            //send the message to the server
            const response = await fetch('https://jsonplaceholder.typicode.com/todos', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ text: message }), //data can be 'string' or {object}!
            })

            //get response from the server

            if (response.ok) {
                const resp = await fetch('https://jsonplaceholder.typicode.com/todos');
                const data = await resp.json();
                console.log(data);
                const div = document.createElement('div');
                div.className = 'bot-message message-recieved';
                const para = document.createElement('p');
                para.className = 'chat-message';
                para.innerText = data[Math.floor(Math.random() * 200)]?.title;
                div.appendChild(para);
                chat_box.appendChild(div);
                chat_box.scrollTop = chat_box.scrollHeight;

            } else {
                console.error('Error: ', response.status)
            }
        } catch (e) {
            const div = document.createElement('div');
            div.className = 'bot-message message-recieved';
            const para = document.createElement('p');
            para.className = 'chat-message';
            para.innerText = 'Sorry!.....\nServer is currently unavailable!';
            div.appendChild(para);
            chat_box.appendChild(div);
            chat_box.scrollTop = chat_box.scrollHeight;
        }

        // const data = await fetch('')

    }


    return (
        <div className="chat-container" >
            <div id="chat-box">
                <div className="bot-message message-recieved">
                    <p className="chat-message" >Hello! How can I assist you today?</p>
                </div>
                <div className="bot-message message-sent">
                    <p className="chat-message" >Good! Tell me something about yourself!</p>
                </div>
                {/* <div className="bot-message message-sent">
                    <p className="chat-message" >{message}</p>
                </div> */}
                {/* <p class="bot-message message-sent">Good! Tell me something about yourself!</p> */}
            </div>
            <div id="messages" className="input-container">
                <form action="">
                    {/* {% csrf_token %} */}
                    <input name="client_msg" type="text" id="user-input" placeholder="Type your message here..."
                        value={message}
                        onChange={(e) => { setMessage(e.target.value) }}
                    />

                    {/* <button id="send-button" type="submit" value='submit' onClick={msgParser.bind(null, message, 'server')} >Send</button> */}
                    <button id="send-button" type="submit" value='submit' onClick={handleClick}>Send</button>
                    {/*using bind method to pass on arguments to the main funcion; as it ensures the function is called after the component has been rendered */}
                </form>
            </div>
            <div className="input-container">
                {/* {% if form_data %}
            <p>{{ form_data }}</p>
            {% endif %} */}
            </div>
        </div>
    );
}

export default Chatbot;

//writing code for event of chatbot
//these statements are already beign declared and used in above component


export const msgParser = (msg, type = 'client', event) => {
    if (event) { event.preventDefault(); }

    const chat_box = document.getElementById('chat-box');
    // const send_button = document.getElementById('send-buton');

    if (type == 'client') {
        const div = document.createElement('div');
        div.className = 'bot-message message-sent';
        const para = document.createElement('p');
        para.className = 'chat-message';
        para.innerText = msg;
        div.appendChild(para);
        chat_box.appendChild(div);
    }

    else {
        const div = document.createElement('div');
        div.className = 'bot-message message-recieved';
        const para = document.createElement('p');
        para.className = 'chat-message';
        para.innerText = msg;
        div.appendChild(para);
        chat_box.appendChild(div);
    }

}