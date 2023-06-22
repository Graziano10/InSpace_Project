import "./LoginForm.css";
import React from "react";
import image from "./WikiAssets/whiteEmail.png";
import axios from "axios";
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../store/authSlice";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Fade from "react-reveal/Fade";
import NavBar from "../../components/bundles/header/NavBar";

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
        
        if(results.status == 200) {
          const data = results.data; // -> { user: { ... }, token: ... }
          dispatch(login(data));
          navigate("/");
        } else {
          toast.error("User not found!");
          setForm({
            email: "",
            password: "",
          });
        }

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
      <>
  <section className='section-login'>
     <div className="absolute top-0 w-full z-50 text-white">
            <NavBar />
          </div>
        <div className="background  w-full h-full flex justify-center items-center relative">
          <Fade top>
        <div className="login-box x:absolute top-10">
            <form className='formPageLogin' action="" onSubmit={handleSubmit}>
                <h2 className='login-h2'>Login</h2>
                <div className="input-box">
                    <span className="icon"></span>
                    <input
                      type="email"
                      required
                      ref={emailRef}
                      id="email"
                      placeholder=""
                      name="email"
                      value={form.email}
                      onInput={handleInput}
                    />
                    <label htmlFor="email">Email</label>
                  </div>
                  <div className="input-box">
                    <span className="icon"></span>
                    <input
                      type="password"
                      required
                      id="password"
                      placeholder=""
                      name="password"
                      value={form.password}
                      onInput={handleInput}
                    />
                    <label htmlFor="password">Password</label>
                  </div>
                  <div className="remember-forgot">
                    <label>
                      <input type="checkbox" />
                      Remember me
                    </label>
                    <a href="#">Forgot Password?</a>
                  </div>
                  <div className="contentButtonLogin">
                    <button type="submit" className="login-button">
                      Login
                    </button>
                  </div>
                  <div className="register-link">
                    <p>
                      Don't have an account? <Link to='/Form-Planet'>Register</Link>
                    </p>
                  </div>
                </form>
              </div>
            </Fade>
            <script
              type="module"
              src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"
            ></script>
            <script
              nomodule
              src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"
            ></script>
          </div>
        </section>
        </>
  );
};

export default LoginForm;
