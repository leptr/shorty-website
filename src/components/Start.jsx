import { Link, useNavigate } from "react-router-dom";
import Transition from "./Transition";
import "./global.css";
import "./Start.css";

const Start = () => {
  const navigate = useNavigate();
  const selectPage = (length) => {
    navigate("/read", {
      state: {
        length: length,
      },
    });
  };

  return (
    <>
      <Link aria-current="page" to="/">
        <img src="../favicon.svg" alt="logo" className="logo" />
      </Link>
      <div
        className="Body Start"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.3 } }}
        exit={{ opacity: 0, transition: { duration: 0.3 } }}
      >
        <div className="main-container">
          <div className="title-big">Shorty</div>
          <div className="subtitle-big"> How much time do you have?</div>
          <div className="buttons">
            <button
              className="btn"
              onClick={() => {
                selectPage("1_minute");
              }}
            >
              1 minute
            </button>
            <button
              className="btn"
              onClick={() => {
                selectPage("3_minutes");
              }}
            >
              3 minutes
            </button>
            <button
              className="btn"
              onClick={() => {
                selectPage("5_minutes");
              }}
            >
              5 minutes
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Transition(Start);
