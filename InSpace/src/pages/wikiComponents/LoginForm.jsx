import './LoginForm.css'
import React from 'react'
import image from "./WikiAssets/whiteEmail.png"
import axios from 'axios'
import { useRef, useState } from 'react'
import {useDispatch} from "react-redux"
import { login } from '../../store/authSlice'
import {useNavigate} from "react-router-dom"
import {toast} from "react-toastify"
import {motion} from 'framer-motion'


const LoginForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
  
    const [form, setForm] = useState({
      email: "",
      password: "",
    });
  
    const emailRef = useRef();
  
    const handleInput = (event) => {
      setForm((_form) => ({
        ..._form,
        [event.target.name]: event.target.value,
      }));
    };
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      try {
        const results = await axios({
          url: "http://localhost:3000/users/login",
          method: "POST",
          data: {
            ...form,
          },
        });
        const data = results.data; // -> { user: { ... }, token: ... }
        dispatch(login(data));
        navigate("/");
      } catch (err) {
        console.error(err);
        toast.error("User not found!");
        setForm({
          email: "",
          password: "",
        });
        emailRef.current.focus();
      }
    };
  





    return(
      


  <section className='section-login'>
        <div className="background">
          <motion.div initial= {{x : 600}} animate= {{x:0}}>
        <div className="login-box">
            <form action="" onSubmit={handleSubmit}>
                <h2 className='login-h2'>Login</h2>
                <div className="input-box">
                    <span className="icon"></span>
                    <input type="email" required  ref={emailRef} id='email' placeholder='' name='email' value={form.email} onInput={handleInput}/>
                        <label htmlFor='email'>Email</label>
                </div>
                <div className="input-box">
                    <span className="icon"></span>
                    <input type="password" required  id='password' placeholder='' name='password' value={form.password} onInput={handleInput} />
                        <label htmlFor='password'>Password</label>
                </div>
                <div className="remember-forgot">
                    <label><input type="checkbox"/>Remember me</label>
                    <a href="#">Forgot Password?</a>
                </div>
                <button type="submit" className='login-button'>Login</button>
                <div className="register-link">
                    <p>Don't have an account?<a href="#">Register</a></p>
                </div>
            </form>
        </div>
        </motion.div>
        <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
        <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
        </div>
        </section>
       
      
        

        
      
      
    )
}

export default LoginForm;