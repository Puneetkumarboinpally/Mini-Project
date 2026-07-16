import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import AuthDataContext from "../context/AuthContext";

const Signup = () => {
  const  Signup  = useContext(AuthDataContext);
  const {
    register,
    reset,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onBlur" });

  const onSubmit = (data) => {
    Signup(data.email, data.password);
    reset();
  };

  return (
    <div className="flex justify-center p-12">
      <div className="cardStyles">
        <h1 className="heading mb-6">Signup</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="formGroupStyles">
            <label className="labelStyles" htmlFor="name">
              Full Name
            </label>
            <input
              className="inputStyles"
              type="text"
              {...register("name", {
                required: "Enter you name here",
              })}
              id="name"
              placeholder="please enter your first name ...."
            />
            {errors.name && (
              <p className="errorStyles">{errors.name.message}</p>
            )}
          </div>
          <div className="formGroupStyles">
            <label className="labelStyles" htmlFor="email">
              Email
            </label>
            <input
              className="inputStyles"
              type="email"
              {...register("email", {
                required: "enter the email",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "enter the email in the right format",
                },
              })}
              id="email"
              placeholder="enter your email ...."
            />
            {errors.email && (
              <p className="errorStyles">{errors.email.message}</p>
            )}
          </div>
          <div className="formGroupStyles">
            <label className="labelStyles" htmlFor="password">
              Password
            </label>
            <input
              className="inputStyles"
              type="password"
              {...register("password", {
                required: "enter the password",
                pattern: {
                  value:
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%&*!-_]).{8,16}$/,
                  message:
                    "Password must be 8-16 characters and include uppercase, lowercase, number, and special character",
                },
              })}
              id="password"
              placeholder="enter your password ...."
            />
            {errors.password && (
              <p className="errorStyles">{errors.password.message}</p>
            )}
          </div>
          <div className="formGroupStyles">
            <label className="labelStyles" htmlFor="repeatPassword">
              Repeat Password
            </label>
            <input
              className="inputStyles"
              type="password"
              {...register("repeatPassword", {
                required: "please repeat your password",
                validate: (value) =>
                  value === watch("password") ||
                  "password does not match please try again",
              })}
              id="repeatPassword"
              placeholder="enter your password again ...."
            />
            {errors.repeatPassword && (
              <p className="errorStyles">{errors.repeatPassword.message}</p>
            )}
          </div>
          <div className="formGroupStyles">
            <label className="labelStyles" htmlFor="number">
              Mobile Number
            </label>
            <input
              className="inputStyles"
              type="tel"
              id="number"
              {...register("number", {
                required: "number is required",
                pattern: {
                  value: /^(?:07\d{9}|\+44\s?7\d{9})$/,
                  message: "Enter a valid UK mobile number",
                },
              })}
              placeholder="enter your number ...."
            />
            {errors.number && (
              <p className="errorStyles">{errors.number.message}</p>
            )}
          </div>
          <button className="buttonStyles">signup</button>
          <p className="text-text font-semibold text-lg">
            Already have an account?{" "}
            <Link
              className="text-accent font-bold cursor-pointer underline"
              to={"/login"}
            >
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
