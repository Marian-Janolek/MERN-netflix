import './login.css';

const Login = () => {
  return (
    <div className="login">
      <form className="loginForm">
        <input type="text" placeholder="email" className="loginInput" />
        <input type="password" placeholder="password" className="loginInput" />
        <button className="loginBtn">Login</button>
      </form>
    </div>
  );
};

export default Login;