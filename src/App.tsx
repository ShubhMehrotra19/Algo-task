import Dashboard from "./components/dashboard/dashboard";
import Navbar from "./components/navbar/navbar";
import Sidebar from "./components/sidebar/sidebar";

function App() {
  return (
    <main className="h-screen w-screen flex flex-col justify-start items-center bg-gradient-to-b from-white to-[#f1faff] px-8 pt-5 overflow-hidden">
      <Navbar />
      <div className="w-full flex justify-between items-start">
        <div className="w-[20%]">
          <Sidebar />
        </div>
        <div className="w-[80%]">
          <Dashboard />
        </div>
      </div>
    </main>
  );
}

export default App;
