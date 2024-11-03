import clock from "/icons/dashboardIcons/clock.svg";

interface OpenedStateProps {
  icon: string;
  title: string;
}

function OpenedState({ icon, title }: OpenedStateProps) {
  const design = {
    alignmentBetween: "flex justify-between items-center",
    alignmentCenter: "flex justify-center items-center gap-2",
  };

  return (
    <div className="w-full rounded-b-md p-2 mt-1 cursor-pointer hover:scale-[101%] transition-all duration-300 ease-in-out">
      <div className="w-full flex justify-between items-center py-3 px-1">
        <div className={design.alignmentCenter}>
          <img src={icon} alt="" className="w-5 h-5" />
          <p className="text-semibold text-black/90 text-sm">{title}</p>
        </div>
        <div className={design.alignmentCenter}>
          <img src={clock} alt="" className="w-5 h-5" />
          <p className="text-normal text-black/60 text-sm">10:00</p>
        </div>
      </div>
      <div className="h-[1px] bg-gradient-to-r from-white to-white via-[#172B4D]"></div>
    </div>
  );
}

export default OpenedState;
