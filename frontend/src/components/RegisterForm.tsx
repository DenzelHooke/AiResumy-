import React, {useState } from 'react'
import type { ChangeEvent } from 'react'
import axios from 'axios'
import Input from './Input';

export default function RegisterForm() {
    const [form, setForm] = useState({
        email: "",
        password: ""
    })
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    
  return (
    <form onSubmit={async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post("http://localhost:8080/auth/register", form)
        } catch (error) {
            return error
        }
      
    }}>
        <div>
            <h2>Create your account</h2>
        </div>
        <div>
            <Input label='Email Address' name='email' onChange={(e) => setForm({
                ...form,
                email: e.target.value
            })}/>
        </div>
        <div>
            <Input label='Password`' type="password" name='password' onChange={(e) => setForm({
                ...form,
                password: e.target.value
            })}/>
        </div>

        <button type="submit" className="px-4 py-2 rounded-lg font-medium
         bg-blue-600 text-white
         hover:bg-blue-700
         focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
         transition-colors">Create Account</button>
    </form>
  )
}
