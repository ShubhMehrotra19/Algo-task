import D_content from "./components/Dashboard-content/D_content";
import D_navbar from "./components/Dashboard-navbar/D_navbar";
import D_sidebar from "./components/Dashboard-sidebar/D_sidebar";

function Dashboard() {
  return (
    <div className="h-screen flex flex-col justify-start items-stretch bg-white border-2 border-[#A4E6FF] p-5 rounded-md mt-[6px] mr-3">
      <D_navbar />
      <div className="flex justify-center items-start gap-3 w-full">
        <div className="w-[30%]">
          <D_sidebar />
        </div>
        <D_content />
      </div>
    </div>
  );
}

export default Dashboard;
