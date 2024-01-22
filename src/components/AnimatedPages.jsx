import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./Home";
import Start from "./Start";
import Read from "./Read";
import "./global.css";

const AnimatedPages = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes key={location.pathname} location={location}>
        <Route path="/" element={<Home />}></Route>
        <Route path="/start" element={<Start />}></Route>
        <Route path="/read" element={<Read />}></Route>
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedPages;
