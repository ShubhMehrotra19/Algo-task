import Navbar from "./components/navbar/navbar";
import Sidebar from "./components/sidebar/sidebar";

function App() {
  return (
    <main className="h-screen w-screen flex flex-col justify-start items-center bg-gradient-to-b from-white to-[#b7d1dd] px-8 pt-5">
      <Navbar />
      <div className="w-full flex justify-between items-start">
        <Sidebar />
      </div>
    </main>
  );
}

export default App;
