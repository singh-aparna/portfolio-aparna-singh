import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Webview/Header/Header";
import MainSection from "./Webview/MainSection/MainSection";
import PopUp from "./Webview/Component/PopUp/PopUp";
import LatestWork from "./Webview/LatestWork/LatestWork";
import Experience from "./Webview/Experience/Experience";

function App() {
  return (
    <BrowserRouter>
      <div className="flex bg-[#f4f2ee]">
        <div className="w-[57px] top-0 left-0 fixed h-screen "><Header /></div>

        <div className="flex-1 h-screen overflow-auto">
          <Routes>
            <Route exact path="/" element={<MainSection />}></Route>
            <Route exact path="/" element={<PopUp />}></Route>

            <Route exact path="/latest-work" element={<LatestWork />}></Route>
            <Route exact path="/experience" element={<Experience />}></Route>
            <Route exact path="/popup" element={<PopUp />}></Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
