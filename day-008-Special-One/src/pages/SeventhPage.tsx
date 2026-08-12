import { useEffect } from "react";
import confetti from "canvas-confetti";

const SeventhPage = () => {
  useEffect(() => {
    const end = Date.now() + 5000;

    const interval = setInterval(() => {
      if (Date.now() > end) {
        clearInterval(interval);
        return;
      }

      confetti({
        particleCount: 30,
        spread: 100,
        origin: {
          x: Math.random(),
          y: Math.random() * 0.5,
        },
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="center">
      <h1 className="text-6xl font-bold text-secondary">
        Hurray <span className="emoji2">😘</span>
      </h1>
    </div>
  );
};

export default SeventhPage;
