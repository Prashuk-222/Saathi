import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    const [userName, setUserName] = useState('');
    const [passWord, setPaasWord] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const error = document.getElementById('login_error')
        if (userName !== '') {
            if (passWord !== '') {
                try {

                    const response = await fetch('url', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({ userName: userName, password: passWord })
                    })


                    //removing error message if any

                    error.innerText = '';

                    if (response.ok) {
                        //clearing input fields
                        setUserName('');
                        setPaasWord('');
                        console.log('login submit!');
                        const server_resp = fetch('url');
                        console.log('response recieved' + server_resp);
                    } else {
                        console.log("Error: ", response.status)
                    }

                } catch (e) {
                    error.innerText = 'Check your Connection!';
                }
            } else {
                error.innerText = 'Enter password!'
            }
        } else {
            error.innerText = 'Enter username!';
        }



    }

    return (
        <>
            <div className="container">
                <h2>Login</h2>
                <form >

                    <input type="text" placeholder="Username" name="username" value={userName} onChange={(e) => setUserName(e.target.value)} required />
                    <input type="password" placeholder="Password" name="password" value={passWord} onChange={(e) => setPaasWord(e.target.value)} required />
                    <input type="submit" value="Login" onClick={handleSubmit} />
                </form>
                <div>
                    <div id='login_error'></div>
                    <h3>Have you Sign-Up!</h3>
                    {/* <a href="{% url 'signup' %}">Signup</a> */}
                    <Link to="/signup">Signup</Link>
                </div>
            </div>
        </>
    );
}

export default Login;