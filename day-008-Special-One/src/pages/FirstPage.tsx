const FirstPage = () => {
  return (
    <div className="min-h-screen flex justify-center items-center p-4">
      <div className="p-6 bg-[#FFBDC5] rounded-lg shadow-lg sm:flex gap-2 ">
        <div className="flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1638310549061-6867875fc2aa?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Groot"
            className="w-30 h-30 object-cover rounded-full"
          />
        </div>
        <div className="flex flex-col justify-around items-center gap-2 lg:gap-4">
          <h1 className="font-bold text-xl text-center">
            🌸Will you go on a Date with me?🌸
          </h1>
          <div className="flex gap-6">
            <button className="py-2 px-6 font-bold rounded active:scale-95 cursor-pointer shadow-md text-lg bg-[#670626] text-[#ffbdc5]">
              Yes 💝
            </button>
            <button className="border py-2 px-6 font-bold rounded active:scale-95 cursor-pointer shadow-md text-lg bg-transparent border-2 border-[#670626] text-[#670626]">
              No 🥺
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstPage;
