import React from "react";
import { Layout } from "./screens/Layout";
import "./App.css";
import "./assets/fonts/poppins/Poppins-Regular.ttf";
import "react-loading-skeleton/dist/skeleton.css";
import { SkeletonTheme } from "react-loading-skeleton";
const App = () => {
  return (
    <SkeletonTheme baseColor="#202020" highlightColor="#444">
      <Layout />
    </SkeletonTheme>
  );
};

export default App;
