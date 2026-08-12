import { useNavigate } from "react-router-dom";

const FifthPage = () => {
  const navigate = useNavigate();
  return (
    <div className="center text-center">
      <div className="card">
        <h1 className="text-2xl font-bold">
          Just to confirm for the <br />
          final time 🤔
        </h1>
        <p className="text-lg font-semibold">Are you sure</p>
        <div className="flex justify-center my-4 gap-4">
          <button 
          onClick={()=>navigate("/sixthPage")}
          className="btn border-2 border-primary bg-primary/10 active:scale-95 text-primary cursor-pointer">
            Yes
          </button>
          <button className="btn bg-primary cursor-not-allowed">No</button>
        </div>
      </div>
    </div>
  );
};

export default FifthPage;
