// import logo from './logo.svg';
// import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import './App.css';
import Navbars from "./Components/Navbars";
import  Home  from "./Components/Home";
import About from "./Components/About";
// import Router from "./Routes/Router";

function App() {
  // const [name, namestate] = useState("Raj demo");
  // const [color, colorstate] = useState("green");
  // const changename = () => {
  //   namestate("New Raj Demo");
  // };
  // const changename1 = () => {
  //   colorstate("red");
  // };
  // const changename2 = () => {
  //   colorstate("blue");
  // };
  // const changename3 = () => {
  //   colorstate("grey");
  // };
  // <Home />
  return (
    <>
      <Router>
        <Navbars />
        <Routes>
          <Route exact path="/" element={<Home />} />

          <Route exact path="/about" element={<About />} />
        </Routes>

        <h1>hello raj</h1>
      </Router>
    </>
  );
}

export default App;

// {
//   <header className="App-header" style={{ backgroundColor: color }}>
// <img src={logo} className="App-logo" alt="logo" />
// <p>
//   Edit <code>src/App.js</code> and save to reload.
// </p>
// <p>
//   This is the app created By {name}
// </p>
// <div>
//   <button onClick={() => changename()}>changing name</button>
//   <button onClick={() => changename1()}>changing solue</button>
//   <button onClick={() => changename2()}>changing color</button>
//   <button onClick={() => changename3()}>changing bsda</button>
// </div>
// </header>
// }
