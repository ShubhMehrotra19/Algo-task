import { useEffect, useState } from "react";
import Dashboard from "./components/dashboard/dashboard";
import Navbar from "./components/navbar/navbar";
import Sidebar from "./components/sidebar/sidebar";

function App() {
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        document.title = "Let's reach the Zenith! 🚀";
      } else {
        document.title = "AlgoZenith";
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return (
    <main className="h-screen w-screen flex flex-col justify-start items-center bg-gradient-to-b from-white to-[#f1faff] px-8 pt-5 overflow-hidden">
      <Navbar
        isClicked={isClicked}
        onClick={() => {
          setIsClicked(!isClicked);
        }}
      />
      <div className="w-full flex justify-between items-start">
        <div className={isClicked ? "" : "w-[20%]"}>
          <Sidebar toHide={isClicked} />
        </div>
        <div className={isClicked ? "w-full" : "w-[80%]"}>
          <Dashboard />
        </div>
      </div>
    </main>
  );
}

export default App;
