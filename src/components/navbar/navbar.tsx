import { useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

interface NavbarProps {
  isClicked: boolean;
  onClick: () => void;
}

function Navbar({ isClicked, onClick }: NavbarProps) {
  const design = {
    alignmentBetween: "flex justify-between items-center",
    alignmentCenter: "flex justify-center items-center gap-5",
  };

  const icons = {
    menu: "/icons/navbarIcons/menu.svg",
    menuClose: "/icons/navbarIcons/menuClose.svg",
    logo: "/icons/navbarIcons/Algozenith.svg",
    bell: "/icons/navbarIcons/bell.svg",
  };

  const [isBellClicked, setIsBellClicked] = useState(false);

  useGSAP(() => {
    const tl = gsap.timeline();

    if (isBellClicked) {
      tl.fromTo(
        ".notification",
        {
          width: "32px",
        },
        {
          width: "200px",
          duration: 0.5,
          ease: "power1.inOut",
        }
      );
    } else {
      tl.fromTo(
        ".notification",
        {
          width: "200px",
        },
        {
          width: "32px",
          duration: 0.5,
          ease: "power1.inOut",
        }
      );
    }
  }, [isBellClicked]);

  return (
    <nav className={`navbar w-full px-2 mb-10 ${design.alignmentBetween}`}>
      <div className={design.alignmentCenter}>
        <img
          onClick={onClick}
          src={isClicked ? icons.menuClose : icons.menu}
          className="cursor-pointer"
          alt=""
        />
        <img style={{ paddingTop: "5px" }} src={icons.logo} alt="" />
      </div>
      <div className={design.alignmentCenter}>
        <div
          onClick={() => {
            setIsBellClicked(!isBellClicked);
          }}
          className="notification bg-[#E7F8FF] rounded-md p-1 h-8 flex justify-center items-center gap-2">
          <img
            className="cursor-pointer hover:rotate-12 active:scale-95 transition-all duration-300 ease-in-out"
            src={icons.bell}
            alt="bell"
          />
          <p
            className={`text-sm font-semibold text-black/70 ${
              isBellClicked
                ? "block opacity-100 transition-all duration-1000 ease-in-out"
                : "hidden opacity-0"
            }`}>
            No new messages
          </p>
        </div>
        <div className="rounded-full cursor-pointer bg-gray-400 h-9 w-9"></div>
      </div>
    </nav>
  );
}

export default Navbar;
