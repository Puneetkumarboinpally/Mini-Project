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
  return (
    <div className="h-screen flex justify-center items-center p-4">
      <div className="bg-secondary p-6  ">
        <h1>What are we Feeling?🍽️✨</h1>
        <p>Pick your vibe</p>
        <div className="grid grid-cols-3 gap-2">
          {foods.map((food) => (
            <div key={food.id}>
              <div>{food.icon}</div>
              <div>{food.title}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FourthPage;
