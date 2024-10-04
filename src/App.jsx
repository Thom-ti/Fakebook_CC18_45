import { Outlet } from "react-router-dom";
import Header from "./components/Header";

const App = () => {
  return (
    <div className="min-h-screen bg-yellow-100">
      <Header />
      <main className="relative flex bg-gray-100 border pt-14">
        <Outlet />
      </main>
    </div>
  );
};

export default App;
