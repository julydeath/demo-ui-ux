import React from "react";
import "./App.css"
import {Blog,Features,Footer,Possibility,WhatGPT3,Header} from "./containers"
import { Cta, Brand, Navbar} from "./components"

function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar/>
        <Header/>
      </div>
      <div>
        <Brand/>
        <WhatGPT3/>
        <Features/>
        <Possibility/>
        <Cta/>
        <Blog/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
