import { useNavigate } from "react-router-dom";
const SixthPage = () => {
  const navigate = useNavigate();
  return (
    <div className="center">
      <div className="card text-center overflow-hidden">
        <h1 className="text-2xl font-bold">
          glad, you didn't say no. be ready <br />
          I'll come and pick you <span className="emoji">😘</span>
        </h1>
        <div className="border-b border-dotted  flex justify-between items-end">
          <p className="car flex-0.8">🚗</p>
          <p className="text-4xl p-2 flex-0.2 inline-block">🏠</p>
        </div>
        <button
          onClick={() => navigate("/seventhPage")}
          className="btn cursor-pointer bg-primary my-4 active-scale-95 transition-all duration-300 hover:translate-y-[-3px]"
        >
          i'm happy to accept 💖
        </button>
      </div>
    </div>
  );
};

export default SixthPage;
