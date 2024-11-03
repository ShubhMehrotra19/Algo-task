import { useState } from "react";
import dashboard from "/icons/sidebarIcons/dashboard.svg";
import learn from "/icons/sidebarIcons/learn.svg";
import forums from "/icons/sidebarIcons/forums.svg";
import upskill from "/icons/sidebarIcons/upskill.svg";
import contest from "/icons/sidebarIcons/contest.svg";
import leaderboard from "/icons/sidebarIcons/leaderboard.svg";
import SideTab from "./components/sideTab";

function Sidebar() {
  const [selectedTab, setSelectedTab] = useState<number | null>(null);

  const tabValues = [
    { index: 1, logo: dashboard, title: "Dashboard" },
    { index: 2, logo: learn, title: "Learn" },
    { index: 3, logo: forums, title: "Forums" },
    { index: 4, logo: upskill, title: "Upskill" },
    { index: 5, logo: contest, title: "Contest" },
    { index: 6, logo: leaderboard, title: "Leaderboard" },
  ];

  return (
    <div className="w-full">
      <div className="flex flex-col justify-center items-center gap-5 w-48 p-1">
        {tabValues.map((tab) => (
          <SideTab
            key={tab.index}
            logo={tab.logo}
            title={tab.title}
            selected={selectedTab === tab.index}
            onClick={() => setSelectedTab(tab.index)}
          />
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
