// import React, { useState, useEffect } from "react";
// import { GiCarWheel } from "react-icons/gi";
// import { HiShoppingCart } from "react-icons/hi";
// import { Link } from "react-router-dom";

// export default function Navbar() {
//   const [time, setTime] = useState("");
//   const [timezone, setTimezone] = useState(() => {
//     return localStorage.getItem("timezone") || "Asia/Tashkent";
//   });

//   const countries = [
//     { name: "New York", timezone: "America/New_York" },
//     { name: "Tashkent", timezone: "Asia/Tashkent" },
//     { name: "Moscow", timezone: "Europe/Moscow" },
//   ];

//   useEffect(() => {
//     const updateClock = () => {
//       const now = new Date();
//       const formattedTime = new Intl.DateTimeFormat("en-US", {
//         hour: "numeric",
//         minute: "numeric",
//         second: "numeric",
//         hour12: true,
//         timeZone: timezone,
//       }).format(now);
//       setTime(formattedTime);
//     };

//     updateClock();
//     const interval = setInterval(updateClock, 1000);

//     return () => clearInterval(interval);
//   }, [timezone]);

//   const handleTimezoneChange = (e) => {
//     const newTimezone = e.target.value;
//     setTimezone(newTimezone);
//     localStorage.setItem("timezone", newTimezone);
//   };

//   return (
//     <main className="border-b-2 border-blue-100 fixed top-0 left-0 right-0 w-full z-50 bg-white">
//       <nav className="max-w-[1400px] w-full mx-auto flex items-center justify-between p-4 sm:p-5">
//         <Link to="/" className="flex items-center gap-x-5">
//           <GiCarWheel className="text-blue-500 text-2xl sm:text-3xl md:text-5xl hover:text-blue-600 transition-all active:animate-spin" />
//           <h1 className="text-blue-500 text-lg sm:text-xl md:text-3xl font-bold">
//             D.Motors
//           </h1>
//         </Link>
//         <div className="flex flex-col items-center">
//           <div className="text-blue-500 font-bold text-base sm:text-lg md:text-xl">
//             {time}
//           </div>
//           <select
//             className="mt-1 p-1 text-blue-500 border border-blue-200 rounded-lg"
//             value={timezone}
//             onChange={handleTimezoneChange}
//           >
//             {countries.map((country) => (
//               <option key={country.timezone} value={country.timezone}>
//                 {country.name}
//               </option>
//             ))}
//           </select>
//         </div>
//         <div className="flex items-center gap-x-5 sm:gap-x-7 md:gap-x-12">
//           <Link to="/cart" className="relative">
//             <HiShoppingCart className="text-blue-500 text-xl sm:text-2xl md:text-3xl hover:text-blue-600 transition-all active:translate-y-1" />
//             <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 text-xs sm:text-sm md:text-base bg-blue-500 text-white font-bold w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center border-2 border-white">
//               0
//             </span>
//           </Link>
//           <Link to="/login">
//             <button className="bg-blue-500 text-white font-bold text-sm sm:text-base py-1 px-4 sm:py-2 sm:px-6 rounded-lg hover:bg-blue-600 transition-all active:translate-y-1">
//               Login
//             </button>
//           </Link>
//         </div>
//       </nav>
//     </main>
//   );
// }

import React, { useState, useEffect } from "react";
import { GiCarWheel } from "react-icons/gi";
import { HiShoppingCart } from "react-icons/hi";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setTime, setTimezone } from "../redux/actions/timeActions";

export default function Navbar() {
  const dispatch = useDispatch();
  const [time, setTimeState] = useState("");
  const timezone = useSelector((state) => state.timezone);

  const countries = [
    { name: "New York", timezone: "America/New_York" },
    { name: "Tashkent", timezone: "Asia/Tashkent" },
    { name: "Moscow", timezone: "Europe/Moscow" },
  ];

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const formattedTime = new Intl.DateTimeFormat("en-US", {
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: true,
        timeZone: timezone,
      }).format(now);
      setTimeState(formattedTime);
      dispatch(setTime(formattedTime));
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);

    return () => clearInterval(interval);
  }, [timezone, dispatch]);

  const handleTimezoneChange = (e) => {
    const newTimezone = e.target.value;
    dispatch(setTimezone(newTimezone));
    localStorage.setItem("timezone", newTimezone);
  };

  return (
    <main className="border-b-2 border-blue-100 fixed top-0 left-0 right-0 w-full z-50 bg-white">
      <nav className="max-w-[1400px] w-full mx-auto flex items-center justify-between p-4 sm:p-5">
        <Link to="/" className="flex items-center gap-x-5">
          <GiCarWheel className="text-blue-500 text-2xl sm:text-3xl md:text-5xl hover:text-blue-600 transition-all active:animate-spin" />
          <h1 className="text-blue-500 text-lg sm:text-xl md:text-3xl font-bold">
            D.Motors
          </h1>
        </Link>
        <div className="flex flex-col items-center">
          <div className="text-blue-500 font-bold text-base sm:text-lg md:text-xl">
            {time}
          </div>
          <select
            className="mt-1 p-1 text-blue-500 border border-blue-200 rounded-lg"
            value={timezone}
            onChange={handleTimezoneChange}
          >
            {countries.map((country) => (
              <option key={country.timezone} value={country.timezone}>
                {country.name}
              </option>
            ))}
          </select>
        </div>
        <div className="flex items-center gap-x-5 sm:gap-x-7 md:gap-x-12">
          <Link to="/cart" className="relative">
            <HiShoppingCart className="text-blue-500 text-xl sm:text-2xl md:text-3xl hover:text-blue-600 transition-all active:translate-y-1" />
            <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 text-xs sm:text-sm md:text-base bg-blue-500 text-white font-bold w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center border-2 border-white">
              0
            </span>
          </Link>
          <Link to="/login">
            <button className="bg-blue-500 text-white font-bold text-sm sm:text-base py-1 px-4 sm:py-2 sm:px-6 rounded-lg hover:bg-blue-600 transition-all active:translate-y-1">
              Login
            </button>
          </Link>
        </div>
      </nav>
    </main>
  );
}
