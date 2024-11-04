import { useState } from "react";
import D_content from "./components/Dashboard-content/D_content";
import D_navbar from "./components/Dashboard-navbar/D_navbar";
import D_sidebar from "./components/Dashboard-sidebar/D_sidebar";
import crane from "/logo/crane.png";

function Dashboard({ content }: { content: boolean }) {
  const [isMentorClicked, setIsMentorClicked] = useState(false);

  return (
    <div className="h-screen">
      {content ? (
        <div className="h-[90%] bg-white flex flex-col justify-start items-stretch border-2 border-[#A4E6FF] p-5 rounded-md mt-[6px] mr-3">
          <D_navbar
            mentorClicked={isMentorClicked}
            setIsMentorClicked={() => {
              setIsMentorClicked(!isMentorClicked);
            }}
          />
          {isMentorClicked ? (
            <div className="flex justify-center items-start gap-3 w-full">
              <div className="w-[30%]">
                <D_sidebar />
              </div>
              <div className="h-screen w-full">
                <D_content content={content} />
              </div>
            </div>
          ) : (
            <div className="flex flex-col justify-center items-center gap-3 w-full h-full">
              <img src={crane} alt="" />
              <p className="text-sm text-semibold text-black/70 text-center ">
                Page under construction.
              </p>
            </div>
          )}
        </div>
      ) : (
        <div className="h-[70%] bg-white flex flex-col justify-center items-center border-2 border-[#A4E6FF] p-5 rounded-md mt-[6px] mr-3 gap-3">
          <img src={crane} alt="" />
          <p className="text-sm text-semibold text-black/70 text-center ">
            Page under construction.
          </p>
        </div>
      )}
    </div>
  );
}

export default Dashboard;
