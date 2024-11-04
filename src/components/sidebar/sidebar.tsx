import { useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import dashboard from "/icons/sidebarIcons/dashboard.svg";
import learn from "/icons/sidebarIcons/learn.svg";
import forums from "/icons/sidebarIcons/forums.svg";
import upskill from "/icons/sidebarIcons/upskill.svg";
import contest from "/icons/sidebarIcons/contest.svg";
import leaderboard from "/icons/sidebarIcons/leaderboard.svg";
import SideTab from "./components/sideTab";

interface SidebarProps {
  toHide: boolean;
  onContentChange: (content: boolean) => void;
}

function Sidebar({ toHide, onContentChange }: SidebarProps) {
  const [selectedTab, setSelectedTab] = useState(4);

  const tabValues = [
    { index: 1, logo: dashboard, title: "Dashboard" },
    { index: 2, logo: learn, title: "Learn" },
    { index: 3, logo: forums, title: "Forums" },
    { index: 4, logo: upskill, title: "Upskill" },
    { index: 5, logo: contest, title: "Contest" },
    { index: 6, logo: leaderboard, title: "Leaderboard" },
  ];

  useGSAP(() => {
    const tl = gsap.timeline();
    if (toHide) {
      tl.fromTo(
        ".sidebar",
        { x: 0, opacity: 1 },
        { x: -500, opacity: 0, duration: 0.5, ease: "Power1.easeOut" }
      );
    } else {
      tl.fromTo(
        ".sidebar",
        { x: -500, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.5, ease: "Power1.easeOut" }
      );
    }
  }, [toHide]);

  return (
    <div className="sidebar w-full">
      <div
        className={`flex flex-col justify-center items-center gap-5 p-1 ${
          toHide ? "w-0" : "w-48"
        } transition-all duration-300 ease-in-out`}>
        {tabValues.map((tab) => (
          <SideTab
            key={tab.index}
            logo={tab.logo}
            title={tab.title}
            selected={selectedTab === tab.index}
            onClick={() => {
              setSelectedTab(tab.index);
              onContentChange(tab.title === "Upskill"); // Update content based on the selected tab title
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
