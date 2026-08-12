import { useState } from "react";
import { useNavigate } from "react-router-dom";

const FirstPage = () => {
  const navigate = useNavigate();

  const [noPosition, setNoPosition] = useState({
    x: 0,
    y: 0,
  });

  const moveNoButton = () => {
    const randomX = Math.floor(Math.random() * 300) - 150;
    const randomY = Math.floor(Math.random() * 200) - 100;

    setNoPosition({
      x: randomX,
      y: randomY,
    });
  };

  return (
    <div className="center">
      <div className="card sm:flex gap-2">
        <div className="flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1638310549061-6867875fc2aa?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Groot"
            className="w-30 h-30 object-cover rounded-full"
          />
        </div>

        <div className="flex flex-col justify-around items-center gap-2 lg:gap-4">
          <h1 className="font-bold text-xl text-center">
            <span className="spin">🌸</span>
            Will you go on a Date with me?
            <span className="spin">🌸</span>
          </h1>

          <div className="flex gap-6">
            <button
              onClick={() => navigate("/secondPage")}
              className="py-2 px-6 font-bold rounded active:scale-95 cursor-pointer shadow-md text-lg bg-primary text-secondary"
            >
              Yes <span className="emoji">💝</span>
            </button>

            <button
              onMouseEnter={moveNoButton}
              onTouchStart={moveNoButton}
              style={{
                transform: `translate(${noPosition.x}px, ${noPosition.y}px)`,
              }}
              className="py-2 px-6 font-bold rounded cursor-pointer shadow-md text-lg bg-transparent border-2 border-primary text-primary transition-transform duration-300"
            >
              No 🥺
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstPage;
