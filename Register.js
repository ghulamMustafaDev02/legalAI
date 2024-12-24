import React, { useState } from 'react';
import axios from 'axios';

function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/api/auth/register', { name, email, password });
            alert('User Registered');
        } catch (error) {
            console.error(error.response.data.message);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                <button type="submit">Register</button>
            </form>
        </div>
    );
}

export default Register;
