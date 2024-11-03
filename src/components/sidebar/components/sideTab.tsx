interface Props {
  logo: string;
  title: string;
  selected: boolean;
  onClick: () => void;
}

function SideTab({ logo, title, selected, onClick }: Props) {
  return (
    <div
      onClick={onClick}
      className={`w-full cursor-pointer flex justify-start items-center gap-3 pl-2 py-1 rounded-md ${
        selected ? "bg-[#AAE8FF]" : "bg-transparent"
      } hover:scale-[102%] hover:shadow-sm active:scale-95 transition duration-200 ease-in-out`}>
      <img src={logo} className="h-6 w-6" alt="" />
      <p className={`text-lg ${selected ? "font-medium" : "font-normal"}`}>
        {title}
      </p>
    </div>
  );
}

export default SideTab;
