import D_content from "./components/Dashboard-content/D_content";
import D_navbar from "./components/Dashboard-navbar/D_navbar";
import D_sidebar from "./components/Dashboard-sidebar/D_sidebar";
import lock from "/logo/lock.svg";

function Dashboard({ content }: { content: boolean }) {
  return (
    <div className="h-screen">
      {content ? (
        <div className="h-[90%] bg-white flex flex-col justify-start items-stretch border-2 border-[#A4E6FF] p-5 rounded-md mt-[6px] mr-3">
          <D_navbar />
          <div className="flex justify-center items-start gap-3 w-full">
            <div className="w-[30%]">
              <D_sidebar />
            </div>
            <div className="h-screen w-full">
              <D_content content={content} />
            </div>
          </div>
        </div>
      ) : (
        <div className="h-[70%] bg-white flex flex-col justify-center items-center border-2 border-[#A4E6FF] p-5 rounded-md mt-[6px] mr-3 gap-3">
          <img src={lock} alt="" />
          <p className="text-sm text-semibold text-black/70 text-center ">
            This content is locked. <br /> Please complete the previous parts to
            unlock this content.
          </p>
        </div>
      )}
    </div>
  );
}

export default Dashboard;
