import { Link, useLocation } from "react-router-dom";
import Transition from "./Transition";
import Story from "./Story";
import "./global.css";

const Read = () => {
  const location = useLocation();
  const length = location.state.length;

  return (
    <div
      className="Body"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.3 } }}
      exit={{ opacity: 0, transition: { duration: 0.3 } }}
    >
      <Link to="/" className="title-big">
        Shorty
      </Link>
      <Story length={length} />
    </div>
  );
};

export default Transition(Read);
