import { BrowserRouter } from "react-router-dom";
import AnimatedPages from "./components/AnimatedPages";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <AnimatedPages />
      </BrowserRouter>
    </div>
  );
};

export default App;
