import React, { useState } from 'react'
import axios from 'axios';

const Signin = () => {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const handleSignin = (e) => {
        e.preventDefault();
        const user = [userName, password];
        axios({
            method: "POST",
            url: `${process.env.REACT_APP_NOTEIFY_BACKEND}/users/login`,
            headers: {
                "Content-Type": "application/json",
            },
            data: user,
        }).then((res) => {
            console.log("User logged in");
            const token = res.data.token;
            localStorage.setItem("token", token);
        }).catch((e) => {
            alert("Authentication failed");
            setPassword("");
            setUserName("");
        });
    };

    const handleRegister = (e) => {
        e.preventDefault();
        const user = [userName, password];

        axios({
            method: "POST",
            url: `${process.env.REACT_APP_NOTEIFY_BACKEND}/users/create`,
            headers: {
                "Content-Type": "application/json",
            },
            data: user,
        }).then((res) => {
            console.log("User created");
            localStorage.setItem("token", res.data.token);
        }).catch((e) => {
            alert(e);
            setUserName("");
            setPassword("");
        })
    } 
  
    return (
    <div className="signin">
        <h1 className='signin--header'>Noteify v2</h1>
        <div className='siginin--form'>
            <form>
                <div className='form--username'>
                    <span className="form-label">Username</span>
                    <input 
                        type="text" 
                        className='form-input' 
                        required 
                        value={userName} 
                        onChange={(e) => {
                            setUserName(e.target.value);
                        }} 
                    />
                </div>
                <div className='form--password'>
                    <span className='form-label'>password</span>
                    <input 
                        type="password" 
                        className='form-input' 
                        required 
                        value={password} 
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }} 
                    />
                </div>
                <div className='form--btns'>
                    <button className='btns'
                        onClick={handleSignin}>
                            Sign In
                    </button>
                    <button className='btns register-btn'
                        onClick={handleRegister}>
                            Create Account
                    </button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Signin