import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Routes/Home";
import Courses from "./Routes/Courses";
import UIcomponent from "./Routes/UIcomponent";
import About from "./Routes/About";
import SignUp from "./Routes/SignUp";
import Login from "./Routes/Login";
import Pricing from "./Routes/Pricing";
import ContactUs from "./Routes/ContactUs";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/ui" element={<UIcomponent />} />
        <Route path="/about us" element={<About />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </div>
  );
}

export default App;
