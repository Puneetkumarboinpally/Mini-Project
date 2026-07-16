import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
const login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
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
              {...register("email", {
                required: "email is required",
              })}
              placeholder="Enter your email here..."
            />
          </div>
          <div className="formGroupStyles">
            <label className="labelStyles" htmlFor="password">
              Password
            </label>
            <input
              className="inputStyles"
              type="password"
              placeholder="Enter your password here..."
            />
          </div>
          <button type="button" className="buttonStyles">
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

export default login;
