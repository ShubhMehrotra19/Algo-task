import D_sideTab from "./D_sideTab";
import { useState } from "react";

function D_sidebar() {
  const [selectedTab, setSelectedTab] = useState(1);

  const tabValues = [
    { index: 1, title: "Chapter 1" },
    { index: 2, title: "Chapter 2" },
    { index: 3, title: "Chapter 3" },
    { index: 4, title: "Chapter 4" },
    { index: 5, title: "Chapter 5" },
  ];

  return (
    <div className="w-full">
      <div className="flex flex-col justify-center items-center gap-5 p-1 w-56">
        {tabValues.map((tab) => (
          <D_sideTab
            key={tab.index}
            title={tab.title}
            selected={selectedTab === tab.index}
            onClick={() => setSelectedTab(tab.index)}
          />
        ))}
      </div>
    </div>
  );
}

export default D_sidebar;
