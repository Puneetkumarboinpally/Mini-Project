import { Link } from "react-router-dom";
const login = () => {
  return (
    <div className="h-full flex justify-center items-center">
      <div className="w-full max-w-md p-8 border-2 bg-white/20 rounded-xl border-white/30">
        <h1 className="text-4xl font-bold text-text mb-4">Login</h1>
        <form>
          <div className="flex flex-col mb-2">
            <label className="text-text text-lg mb-1 font-bold" htmlFor="email">
              Email
            </label>
            <input
              className="border p-2 rounded text-text outline-accent"
              type="email"
              placeholder="Enter your email here..."
            />
          </div>
          <div className="flex flex-col mb-4">
            <label className="text-text text-lg font-bold mb-1" htmlFor="password">
              Password
            </label>
            <input
              className="border p-2 rounded text-text outline-accent"
              type="password"
              placeholder="Enter your password here..."
            />
          </div>
          <button
            type="button"
            className="my-2 py-2 px-6 rounded-lg text-lg font-bold text-text 
          bg-accent cursor-pointer active:scale-95
          transition-all duration-200 hover:translate-y-[-4px] "
          >
            login
          </button>
          <p className="text-lg text-text font-semibold">
            Dont have an account?
            <Link className="text-accent font-bold cursor-pointer underline mx-2" to={"/signup"}>Signup</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default login;
