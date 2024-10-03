import Header from "./components/Header";
import PostContainer from "./components/PostContainer";
import SidebarContact from "./components/SidebarContact";
import SidebarMenu from "./components/SidebarMenu";

const App = () => {
  return (
    <div className="min-h-screen bg-yellow-100">
      <Header />
      <main className="relative flex bg-gray-100 border pt-14">
        <SidebarMenu />
        <PostContainer />
        <SidebarContact />
      </main>
    </div>
  );
};

export default App;
