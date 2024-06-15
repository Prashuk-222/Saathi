import React, { useEffect, useState } from 'react';
import { createBrowserRouter, Outlet, Link } from 'react-router-dom';


const Signup = () => {
    const [userName, setUserName] = useState('');
    const [passWord, setPaasWord] = useState('');
    const [passwordCheck, setPasswordCheck] = useState('');


    const handleSubmit = async (e) => {
        e.preventDefault();
        const error = document.getElementById('sign_error');
        if (userName !== '') {
            if (passWord !== '') {
                if (passwordCheck !== '') {
                    if (passWord === passwordCheck) {
                        try {
                            const response = await fetch('url', {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json'
                                },
                                body: JSON.stringify({ username: userName, password: passWord })
                            });

                            if (response.ok) {
                                error.innerText = '';
                                console.log('signed up');
                                //server side response
                                setPaasWord('');
                                setUserName('');
                                setPasswordCheck('');
                            } else {
                                console.log('Error: ' + response.status)
                            }
                        } catch (e) {
                            error.innerText = "Check your connection!";
                        }
                    } else {
                        error.innerText = 'Password does not match!';
                    }
                } else {
                    error.innerText = 'Re-enter password!';
                }
            } else {
                error.innerText = 'Enter Password!';
            }
        } else {
            error.innerText = 'Enter Username!';
        }



    }
    return (
        <>
            <div className="container">
                <h2>Sign Up</h2>
                <form method="POST">
                    <input type="text" placeholder="Username" name="username" required value={userName} onChange={(e) => setUserName(e.target.value)} />
                    <input type="password" placeholder="Password" name="password" required value={passWord} onChange={(e) => setPaasWord(e.target.value)} />
                    <input type="password" placeholder="Re-enter password" name="passcheck" required value={passwordCheck} onChange={(e) => setPasswordCheck(e.target.value)} />
                    <input type="submit" value="Sign Up" onClick={handleSubmit} />
                </form>
                <div>
                    <div id='sign_error'></div>
                    <h3>Already a User !</h3>
                    {/* <a href="{% url 'login' %}">Login</a> */}
                    <Link to="/login">Login</Link>
                </div>
            </div>
        </>
    );
}

export default Signup;