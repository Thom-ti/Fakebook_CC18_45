import { ClockAlert, Handshake, HomeIcon, Newspaper, Store, TvMinimalPlay, Users } from "lucide-react";
import Header from "./components/Header";

const App = () => {
  return (
    <div className="min-h-screen bg-yellow-100">
      <Header />
      <main className="relative flex bg-gray-100 border pt-14">
        {/* Left */}
        <div className="fixed top-14 h-full w-[350px] overflow-auto flex flex-col gap-2 min-w-[220px] max-xl:w-[200px]">
          <button className="btn border-none shadow-none justify-start gap-x-2 hover:bg-opacity-20">
            <HomeIcon className="w-8" />
            Andy Codecamp
          </button>
          <button className="btn border-none shadow-none justify-start gap-x-2 hover:bg-opacity-20">
            <Users className="w-8" />
            Friends
          </button>
          <button className="btn border-none shadow-none justify-start gap-x-2 hover:bg-opacity-20">
            <Handshake className="w-8" />
            Groups
          </button>
          <button className="btn border-none shadow-none justify-start gap-x-2 hover:bg-opacity-20">
            <ClockAlert className="w-8" />
            Memories
          </button>
          <button className="btn border-none shadow-none justify-start gap-x-2 hover:bg-opacity-20">
            <TvMinimalPlay className="w-8" />
            Videos
          </button>
          <button className="btn border-none shadow-none justify-start gap-x-2 hover:bg-opacity-20">
            <Store className="w-8" />
            Marketplace
          </button>
          <button className="btn border-none shadow-none justify-start gap-x-2 hover:bg-opacity-20">
            <Newspaper className="w-8" />
            Feed
          </button>
        </div>
        {/* Center */}
        <div className="w-[680px] mx-auto min-h-screen my-3 flex flex-col gap-4 rounded-lg">
          <div className="artboard phone-3">414x736</div>
          <div className="artboard phone-3">414x736</div>
          <div className="artboard phone-3">414x736</div>
          <div className="artboard phone-3">414x736</div>
        </div>
        {/* Right */}
        <div className="fixed top-14 right-0 h-full w-[350px] overflow-auto flex flex-col gap-2 pt-4 px-2 max-xl:hidden">
          <div className="btn btn-xl m-10">Menu Item</div>
          <div className="btn btn-xl m-10">Menu Item</div>
          <div className="btn btn-xl m-10">Menu Item</div>
          <div className="btn btn-xl m-10">Menu Item</div>
          <div className="btn btn-xl m-10">Menu Item</div>
          <div className="btn btn-xl m-10">Menu Item</div>
          <div className="btn btn-xl m-10">Menu Item</div>
          <div className="btn btn-xl m-10">Menu Item</div>
          <div className="btn btn-xl m-10">Menu Item</div>
          <div className="btn btn-xl m-10">Menu Item</div>
          <div className="btn btn-xl m-10">Menu Item</div>
          <div className="btn btn-xl m-10">Menu Item</div>
          <div className="btn btn-xl m-10">Menu Item</div>
          <div className="btn btn-xl m-10">Menu Item</div>
        </div>
      </main>
    </div>
  );
};

export default App;
