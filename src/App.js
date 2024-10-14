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
      <div className="flex h-screen bg-[#f4f2ee]">
        <div className="w-[57px] h-full "><Header /></div>

        <div className="flex-grow h-full">
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
