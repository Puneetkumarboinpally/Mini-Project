import confetti from "canvas-confetti";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const SecondPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    confetti({
      particleCount: 200,
      spread: 200,
      origin: {
        y: 0.5,
      },
    });
  }, []);
  return (
    <div className="h-screen flex justify-center items-center p-4">
      <div className="bg-secondary p-6 rounded-lg shadow-lg text-center sm:flex gap-2">
        <div className="flex justify-center">
          <img
            className="h-30 w-30 object-cover object-top rounded-full"
            src="https://images.unsplash.com/photo-1586921628723-72bfe5dd9c74?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="groot wow"
          />
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-bold">
            Wait you Actually <br />
            Said <strong className="text-red-600">YES ?</strong>
          </h1>
          <p className="text-sm font-semibold">
            i was soo ready for you to say no <span className="emoji">😅</span>
          </p>
          <button
            onClick={() => navigate("/thirdPage")}
            className="py-2 px-6 mt-2 font-bold rounded-full active:scale-95 
          cursor-pointer shadow-md text-lg bg-primary text-secondary transition-all duration-300
          hover:translate-y-[-2px]"
          >
            okay okay &rarr;
          </button>
        </div>
      </div>
    </div>
  );
};

export default SecondPage;
