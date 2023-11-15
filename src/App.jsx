import Header from "./components/Header";
import SideBar from "./components/SideBar";
import Feed from "./components/Feed";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Header></Header>
      <div className="app_body">
        <SideBar />
        <Feed />
      </div>
    </div>
  );
}

export default App;
