import React, { useState  } from "react";

import "./signup.css";

import Home from "./home";


function SignUp() {
    console.log("YASH MC!")
    const [isRegistered, setRegistered] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");


    async function handlechange() {
        if (username && password && email) {
           
            try {
                await fetch('http://localhost:8000/signup', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    
                    body: JSON.stringify({ username, email, password }),
                });
                setRegistered(true);
            } catch (error) {
                console.error('Error posting data', error);
                alert('Error signing up');
            }
        } else {
            alert('Please enter all required information');
        }
    }   

    try {
        if (isRegistered) {
            // navigate("/home.jsx");
            return <Home log={username}/>;
        }
    } catch (error) {
        console.error('Error navigating', error);
    }

    return (
        <div className="container">
            <label>Email: </label>
            <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
            <br />
            <label>Username: </label>
            <input type='text' value={username} onChange={(e) => setUsername(e.target.value)} />
            <br />
            <label>Password: </label>
            <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
            <br />
            <button onClick={handlechange}>Sign up</button>
            <br />
            <br />
        </div>
    );
}

export default SignUp;
