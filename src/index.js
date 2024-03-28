import React,{Fragment} from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";

function App() {
  return (
    <Fragment>
      <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Home/>} />
        <Route  path="/Contact" element={<Contact/>} />
        <Route path="/About" element={<About/>} />

        </Routes>
      </BrowserRouter>
    </Fragment>
    
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);