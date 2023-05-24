import './LoginForm.css'


const LoginForm = () => {
    return(
        <section className='section-login'>
        <div className="background">
        <div className="login-box">
            <form action="">
                <h2>Login</h2>
                <div className="input-box">
                    <span className="icon"><ion-icon name="mail"></ion-icon></span>
                    <input type="email" required />
                        <label>email</label>
                </div>
                <div className="input-box">
                    <span className="icon"><ion-icon name="lock-closed"></ion-icon></span>
                    <input type="password" required />
                        <label>Password</label>
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
        <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
        <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
        </div>
        </section>
        
    )
}

export default LoginForm;