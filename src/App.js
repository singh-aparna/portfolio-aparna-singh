import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Webview/Header/Header";
import MainSection from "./Webview/MainSection/MainSection";
import PopUp from "./Webview/Component/PopUp/PopUp";
import LatestWork from "./Webview/LatestWork/LatestWork";

function App() {
  return <BrowserRouter>
  <div className="flex ">
    <div className="flex min-h-screen " ><Header/></div>
   
    <div className="flex-1">
    <Routes>
      <Route exact path="/" element={<MainSection/>}></Route>
      <Route exact path="/latest-work" element={<LatestWork/>}></Route>
      <Route exact path="/popup" element={<PopUp/>}></Route>
    </Routes>
    </div>
    </div>
  </BrowserRouter>
}

export default App;
