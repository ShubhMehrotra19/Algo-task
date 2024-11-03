import { useState } from "react";
import mentor from "/icons/dashboardIcons/mentor.svg";
import learning from "/icons/dashboardIcons/learning.svg";
import i from "/icons/dashboardIcons/i_icon.svg";

function D_navbar() {
  const [isClicked, setIsClicked] = useState(false);

  function btnClicked() {
    setIsClicked(!isClicked);
  }

  return (
    <nav className="w-full flex justify-between items-center mb-3">
      <div className="cursor-pointer flex justify-between items-center rounded-md gap-3 p-2 bg-gradient-to-b from-[#eff5ff] to-white">
        <div
          onClick={btnClicked}
          className={`flex justify-center items-center p-[6px] rounded-md gap-[6px] ${
            isClicked
              ? "bg-white shadow-md border-2 border-gray-400 font-medium"
              : ""
          }`}>
          <img className="h-5 w-5" src={mentor} alt="" />
          <p className="text-sm">Mentor Sessions</p>
        </div>
        <div
          onClick={btnClicked}
          className={`flex justify-center items-center p-[6px] rounded-md gap-[6px] ${
            isClicked
              ? ""
              : "bg-white shadow-md border-2 border-gray-400 font-medium"
          }`}>
          <img className="h-5 w-5" src={learning} alt="" />
          <p className="text-sm">Learning Material</p>
        </div>
      </div>
      <a
        href="https://github.com/ShubhMehrotra19/Algo-task"
        target="_blank"
        rel="noreferrer"
        className="border-2 border-[#99E4FF] rounded-md flex justify-center items-center p-[6px] gap-[6px] cursor-pointer text-black/70 hover:text-white hover:bg-[#99E4FF] hover:scale-[102%] active:scale-95 transition-colors duration-300 ease-in-out">
        <img className="h-5 w-5" src={i} alt="" />
        <p className="text-sm font-semibold">How it works</p>
      </a>
    </nav>
  );
}

export default D_navbar;
