import ClosedState from "./components/ClosedState";

function D_content() {
  const values = [
    {
      index: 1,
      part: "Part 1",
      subparts: 5,
      completed: 45,
    },
    {
      index: 2,
      part: "Part 2",
      subparts: 12,
      completed: 20,
    },
    {
      index: 3,
      part: "Part 3",
      subparts: 12,
      completed: 0,
    },
  ];

  const subpartDetails: { [key: string]: { icon: string; title: string }[] } = {
    "Part 1": [
      { icon: "/icons/dashboardIcons/video.svg", title: "Video 1" },
      { icon: "/icons/dashboardIcons/question.svg", title: "Article 1" },
      { icon: "/icons/dashboardIcons/question.svg", title: "Quiz 1" },
      { icon: "/icons/dashboardIcons/coding.svg", title: "Coding Exercise 1" },
      {
        icon: "/icons/dashboardIcons/resources.svg",
        title: "Combined Resources 1",
      },
    ],
    "Part 2": [
      { icon: "/icons/dashboardIcons/video.svg", title: "Video 1" },
      { icon: "/icons/dashboardIcons/video.svg", title: "Video 2" },
      { icon: "/icons/dashboardIcons/video.svg", title: "Video 3" },
      { icon: "/icons/dashboardIcons/question.svg", title: "Article 1" },
      { icon: "/icons/dashboardIcons/question.svg", title: "Quiz 1" },
      { icon: "/icons/dashboardIcons/coding.svg", title: "Coding Exercise" },
      {
        icon: "/icons/dashboardIcons/resources.svg",
        title: "Combined Resources",
      },
    ],
    "Part 3": [
      { icon: "/icons/dashboardIcons/video.svg", title: "Video 1" },
      { icon: "/icons/dashboardIcons/video.svg", title: "Video 2" },
      { icon: "/icons/dashboardIcons/video.svg", title: "Video 3" },
      { icon: "/icons/dashboardIcons/question.svg", title: "Article 1" },
      { icon: "/icons/dashboardIcons/question.svg", title: "Quiz 1" },
      { icon: "/icons/dashboardIcons/coding.svg", title: "Coding Exercise" },
      {
        icon: "/icons/dashboardIcons/resources.svg",
        title: "Combined Resources",
      },
    ],
  };

  return (
    <main
      className="w-full h-[70%] overflow-x-hidden overflow-y-auto"
      style={{ scrollBehavior: "smooth", scrollbarWidth: "none" }}>
      <div className="w-full flex flex-col justify-start items-center gap-5">
        {values.map((value) => (
          <ClosedState
            key={value.index}
            part={value.part}
            subparts={value.subparts}
            completed={value.completed}
            openedItems={subpartDetails[value.part] || []}
          />
        ))}
      </div>
    </main>
  );
}

export default D_content;
