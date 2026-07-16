import { Link } from "react-router-dom";
const Signup = () => {
  return (
    <div className="flex justify-center p-12">
      <div className="cardStyles">
        <h1 className="heading mb-6">Signup</h1>
        <form>
          <div className="formGroupStyles">
            <label className="labelStyles" htmlFor="name">
              Full Name
            </label>
            <input
              className="inputStyles"
              type="text"
              id="name"
              placeholder="please enter your first name ...."
            />
          </div>
          <div className="formGroupStyles">
            <label className="labelStyles" htmlFor="email">
              Email
            </label>
            <input
              className="inputStyles"
              type="email"
              id="email"
              placeholder="enter your email ...."
            />
          </div>
          <div className="formGroupStyles">
            <label className="labelStyles" htmlFor="password">
              Password
            </label>
            <input
              className="inputStyles"
              type="password"
              id="password"
              placeholder="enter your password ...."
            />
          </div>
          <div className="formGroupStyles">
            <label className="labelStyles" htmlFor="repeatPassword">
              Repeat Password
            </label>
            <input
              className="inputStyles"
              type="password"
              id="repeatPassword"
              placeholder="enter your password again ...."
            />
          </div>
          <div className="formGroupStyles">
            <label className="labelStyles" htmlFor="number">
              Mobile Number
            </label>
            <input
              className="inputStyles"
              type="tel"
              id="number"
              placeholder="enter your number ...."
            />
          </div>
          <button className="buttonStyles">signup</button>
          <p className="text-text font-semibold text-lg">
            Already have an account?{" "}
            <Link  className="text-accent font-bold cursor-pointer underline" to={"/login"}>Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
