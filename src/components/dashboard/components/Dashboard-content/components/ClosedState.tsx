import { useState } from "react";
import clock from "/icons/dashboardIcons/clock.svg";
import contest from "/icons/sidebarIcons/contest.svg";
import resources from "/icons/dashboardIcons/resources.svg";
import up from "/icons/dashboardIcons/upArrow.svg";
import down from "/icons/dashboardIcons/down.svg";
import OpenedState from "./OpenedState";

interface ClosedStateProps {
  part: string;
  subparts: number;
  completed: number;
  openedItems: Array<{
    icon: string;
    title: string;
  }>;
}

function ClosedState({
  part,
  subparts,
  completed,
  openedItems,
}: ClosedStateProps) {
  const design = {
    alignmentBetween: "flex justify-between items-center",
    alignmentCenter2: "flex justify-center items-center gap-3",
    alignmentCenter1: "flex justify-center items-center gap-1",
    alignmentStart: "flex flex-col justify-start items-start",
  };

  const loaderWidth = `${completed}%`;
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div className="w-full">
      <div
        onClick={() => setIsClicked(!isClicked)}
        className={`w-full rounded-md flex flex-col justify-center items-center cursor-pointer ${
          isClicked
            ? "border-t-[1px] border-r-[1px] border-l-[1px] border-[#99E4FF]"
            : "border-[1px] border-[#99E4FF]"
        }`}>
        <div className="w-full pt-2 px-2 flex flex-col justify-center items-end text-[#17384D]">
          <div className={`w-full ${design.alignmentBetween}`}>
            <div className={design.alignmentStart}>
              <p className="uppercase text-sm font-normal text-[#17384D]">
                {part}
              </p>
              <p className="font-bold text-black/90">
                Lorem Ipsum Dolor Sit Amet
              </p>
            </div>
            <div className={design.alignmentCenter2}>
              <div className={design.alignmentCenter1}>
                <img className="h-5 w-5" src={clock} alt="" />
                <p className="text-xs">02:00:00</p>
              </div>
              <div className={design.alignmentCenter1}>
                <img className="h-5 w-5" src={contest} alt="" />
                <p className="text-xs">Medium</p>
              </div>
              <div className={design.alignmentCenter1}>
                <img className="h-5 w-5" src={resources} alt="" />
                <p className="text-xs">{subparts}</p>
              </div>
              <img className="h-3 w-4" src={isClicked ? down : up} alt="" />
            </div>
          </div>
          <div className="p-1 mb-2 rounded-md border-2 border-[#99E4FF] bg-[#EFF5FF] text-xs text-black/80 hover:scale-[102%] hover:bg-[#99E4FF] hover:text-white active:scale-95 transition-colors duration-300 ease-in-out">
            {completed}% Completed
          </div>
        </div>
        <div id="loader" className="w-full h-1 rounded-b-md bg-[#EFF5FF]">
          <div
            style={{ width: loaderWidth }}
            className="bg-[#172B4D]/80 h-full rounded-b-md"></div>
        </div>
      </div>
      <div
        className={
          isClicked
            ? `border-l-[1px] border-r-[1px] border-b-[1px] border-[#99E4FF] rounded-b-md shadow-md`
            : ``
        }>
        {isClicked &&
          openedItems &&
          openedItems.map((item, index) => (
            <OpenedState key={index} icon={item.icon} title={item.title} />
          ))}
      </div>
    </div>
  );
}

export default ClosedState;
