import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import AuthDataContext from "../context/AuthContext";
const Login = () => {
  const { login } = useContext(AuthDataContext);
  const navigate = useNavigate();

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onBlur" });

  const onSubmit = (data) => {
    const result = login(data.email, data.password);
    if (!result.success) {
      alert(result.message);
      return;
    }
    navigate("/");
    reset();
  };

  return (
    <div className="flex justify-center items-center p-8">
      <div className="cardStyles">
        <h1 className="heading">Login</h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="formGroupStyles">
            <label className="labelStyles" htmlFor="email">
              Email
            </label>
            <input
              className="inputStyles"
              type="email"
              id="email"
              {...register("email", {
                required: "email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Please the valid email address",
                },
              })}
              placeholder="Enter your email here..."
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
              id="password"
              {...register("password", {
                required: "password is required to login",
                pattern: {
                  value:
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%&_-]).{8,16}$/,
                  message:
                    "Password must be 8-16 characters and include uppercase, lowercase, number, and special character",
                },
              })}
              placeholder="Enter your password here..."
            />
            {errors.password && (
              <p className="errorStyles">{errors.password.message}</p>
            )}
          </div>

          <button type="submit" className="buttonStyles">
            login
          </button>

          <p className="text-lg text-text font-semibold">
            Don't have an account?{" "}
            <Link
              className="text-accent font-bold cursor-pointer underline"
              to={"/signup"}
            >
              Signup
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
