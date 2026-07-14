import { Link } from "react-router-dom";
const login = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center h-full">
        <h1>Login</h1>
        <form>
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" placeholder="Enter your email here..." />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" placeholder="Enter your password here..." />
          </div>
          <button>login</button>
          <p>
            Dont have an account?
            <Link to={"/signup"}>Signup</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default login;
