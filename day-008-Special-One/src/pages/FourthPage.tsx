import { useNavigate } from "react-router-dom";

interface Food {
  id: number;
  title: string;
  icon: string;
}

const foods: Food[] = [
  {
    id: 1,
    title: "Pizza",
    icon: "🍕",
  },
  {
    id: 2,
    title: "Burger",
    icon: "🍔",
  },
  {
    id: 3,
    title: "Pasta",
    icon: "🍝",
  },
  {
    id: 4,
    title: "Tacos",
    icon: "🌮",
  },
  {
    id: 5,
    title: "Ramen",
    icon: "🍜",
  },
  {
    id: 6,
    title: "Ice Cream",
    icon: "🍨",
  },
];

const FourthPage = () => {
  const navigate = useNavigate();
  return (
    <div className="h-screen flex justify-center items-center p-4">
      <div className="bg-secondary p-6 rounded-lg">
        <h1 className="text-2xl font-bold text-center">
          What are we Feeling?🍽️✨
        </h1>
        <p className="text-center text-lg my-2 font-semibold text-primary/80">
          Pick your vibe
        </p>
        <div className="my-2 grid grid-cols-2 sm:grid-cols-3 gap-3">
          {foods.map((food) => (
            <div
              key={food.id}
              onClick={() => navigate("/fifthPage")}
              className="border-2 p-4 rounded-xl border-primary/10 
               bg-primary/10 text-center flex flex-col gap-3 shadow-lg
              transition-all duration-300 cursor-pointer hover:translate-y-[-2px] hover:border-2 hover:border-primary/80"
            >
              <div className="text-5xl">{food.icon}</div>
              <div className="text-lg font-semibold">{food.title}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FourthPage;
