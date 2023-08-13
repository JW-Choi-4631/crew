import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import FindCrew from "./pages/FindCrew";
import CreateCrew from "./pages/CreateCrew";
import CreateCrew2 from "./pages/CreateCrew2";
import CreateCrew3 from "./pages/CreateCrew3";
import CreateCrew4 from "./pages/CreateCrew4";

function App() {
  return (
    <div style={{ display: "flex", width: "100vw", height: "100vh", justifyContent: "center" }}>
      <Routes>
        <Route path="/" element=<Main /> />
        <Route path="find_crew" element=<FindCrew /> />
        <Route path="create_crew" element=<CreateCrew /> />
        <Route path="create_crew2" element=<CreateCrew2 /> />
        <Route path="create_crew3" element=<CreateCrew3 /> />
        <Route path="create_crew4" element=<CreateCrew4 /> />
      </Routes>
    </div>
  );
}

export default App;
