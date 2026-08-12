import { AlarmClock, CalendarDays } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ThirdPage = () => {
  const navigate = useNavigate();
  return (
    <div className="center">
      <div className="card flex flex-col gap-2">
        <span className="flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1609082460168-e85958ece3f7?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDcxfHx8ZW58MHx8fHx8"
            alt="groot with candle"
            className="h-30 w-30 object-cover rounded-full"
          />
        </span>
        <h1 className="text-center text-2xl font-bold ">
          So... When are you free?😍
        </h1>
        <form className="flex flex-col gap-2">
          <div className="flex flex-col gap-2">
            <label
              htmlFor="date"
              className="flex items-center gap-1 font-bold text-lg"
            >
              Pick a Day
              <span>
                <CalendarDays size={16} />
              </span>
            </label>
            <input
              type="date"
              id="date"
              name="name"
              className="font-semibold border rounded p-2 w-full outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="date"
              className="flex items-center gap-1 font-bold text-lg"
            >
              what time?
              <span>
                <AlarmClock size={16} />
              </span>
            </label>
            <select
              name="clock"
              id="clock"
              className="font-semibold border rounded p-2 w-full outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="default">Select a time</option>
              <option value="1pm">1:00 PM</option>
              <option value="1-30pm">1:30 PM</option>
              <option value="2pm">2:00 PM</option>
              <option value="2-30pm">2:30 PM</option>
              <option value="3pm">3:00 PM</option>
              <option value="3-30pm">3:30 PM</option>
              <option value="4pm">4:00 PM</option>
              <option value="6pm">6:00 PM</option>
              <option value="6-30pm">6:30 PM</option>
              <option value="7pm">7:00 PM</option>
              <option value="7-30pm">7:30 PM</option>
              <option value="8pm">8:00 PM</option>
              <option value="8-30pm">8:30 PM</option>
              <option value="9pm">9:00 PM</option>
              <option value="9-30pm">9:30 PM</option>
              <option value="10pm">10:00 PM</option>
            </select>
          </div>
          <button
            onClick={() => navigate("/fourthPage")}
            className="py-2 px-6 mt-2 font-bold rounded-full active:scale-95 
          cursor-pointer shadow-md text-lg bg-primary text-secondary transition-all duration-300
          hover:translate-y-[-2px]"
          >
            Set the date! 💖
          </button>
        </form>
      </div>
    </div>
  );
};

export default ThirdPage;
