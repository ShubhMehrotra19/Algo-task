function Navbar() {
  const design = {
    alignmentBetween: "flex justify-between items-center",
    alignmentCenter: "flex justify-center items-center gap-5",
  };

  const icons = {
    menu: "/icons/navbarIcons/menu.svg",
    logo: "/icons/navbarIcons/Algozenith.svg",
    bell: "/icons/navbarIcons/bell.svg",
  };

  return (
    <nav className={`w-full mb-10 ${design.alignmentBetween}`}>
      <div className={design.alignmentCenter}>
        <img src={icons.menu} className="cursor-pointer" alt="menu" />
        <img style={{ paddingTop: "5px" }} src={icons.logo} alt="logo" />
      </div>
      <div className={design.alignmentCenter}>
        <div className="bg-[#E7F8FF] rounded-md p-1 h-8 w-8">
          <img
            className="cursor-pointer hover:rotate-12 active:scale-95 transition-all duration-300 ease-in-out"
            src={icons.bell}
            alt="bell"
          />
        </div>
        <div className="rounded-full bg-gray-400 h-9 w-9"></div>
      </div>
    </nav>
  );
}

export default Navbar;
