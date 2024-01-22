import { Link } from "react-router-dom";
import Transition from "./Transition";
import "./global.css";
import "./Home.css";

const Home = () => {
  return (
    <>
      <Link aria-current="page" to="/">
        <img src="../favicon.svg" alt="logo" className="logo" />
      </Link>
      <div
        className="Body Home"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.3 } }}
        exit={{ opacity: 0, transition: { duration: 0.3 } }}
      >
        <div className="main-container">
          <div className="title-big">Shorty</div>
          <div className="subtitle-big">Your go-to app for bite-sized stories on the fly!</div>
          <div className="buttons">
            <Link className="btn" aria-current="page" to="/start">
              Read Now
            </Link>
            <a
              className="badge"
              target="_blank"
              rel="noopener noreferrer"
              href="https://play.google.com/store/apps/details?id=com.leptr.shorty&pcampaignid=web_share&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"
            >
              <img
                alt="Get it on Google Play"
                src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Transition(Home);
