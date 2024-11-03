import D_navbar from "./Dashboard-navbar/D_navbar";
import D_sidebar from "./Dashboard-sidebar/D_sidebar";

function Dashboard() {
  return (
    <div className="h-screen flex flex-col justify-start items-center bg-white border-2 border-[#A4E6FF] p-5 rounded-md mt-4 mr-3 scroll-auto">
      <D_navbar />
      <div className="flex justify-center items-start gap-3">
        <D_sidebar />
      </div>
    </div>
  );
}

export default Dashboard;
