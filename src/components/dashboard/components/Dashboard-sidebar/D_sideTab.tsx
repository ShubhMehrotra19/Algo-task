import clock from "/icons/dashboardIcons/clock.svg";

interface Props {
  title: string;
  selected: boolean;
  onClick: () => void;
}

function D_sideTab({ title, selected, onClick }: Props) {
  return (
    <div
      onClick={onClick}
      className={`w-full cursor-pointer flex justify-start items-center gap-9 px-2 py-2 rounded-md 
        ${selected ? "bg-[#AAE8FF]" : "bg-transparent"} 
        hover:scale-[102%] hover:shadow-sm active:scale-95 transition-shadow duration-200 ease-in-out text-black/80`}>
      <p className={`text-base ${selected ? "font-semibold" : "font-normal"}`}>
        {title}
      </p>
      {selected && (
        <div className="flex justify-center items-center gap-1">
          <img className="h-5 w-5" src={clock} alt="clock icon" />
          <p className="text-sm text-blue-400">05:00:00</p>
        </div>
      )}
    </div>
  );
}

export default D_sideTab;
