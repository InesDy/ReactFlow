import React from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import Flow from "../flow/Flow";
import RandomSmile from "./randomSmile";

const welcomePage = () => {
  return (
    <div>
      <nav>
        <NavLink to="/smile" end>
          A smile
        </NavLink>
        <NavLink to="flow"> Workflow </NavLink>
      </nav>
      <Routes>
        <Route path="/smile" element={<RandomSmile />} />
        <Route path="flow" element={<Flow />} />
      </Routes>
    </div>
  );
};

export default welcomePage;
