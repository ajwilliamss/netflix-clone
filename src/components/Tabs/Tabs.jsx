import { useState } from "react";
import { FaDoorOpen, FaTabletAlt, FaTags } from "react-icons/fa";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";
import tab1 from "../../assets/tab1.png";
import tab2 from "../../assets/tab2.png";
import tab2mobile from "../../assets/tab2mobile.png";
import Table from "./Table/Table";
import "./Tabs.scss";

const tabLabels = {
  cancel: "Cancel any time",
  watch: "Watch anywhere",
  select: "Select your plan",
};

const Tabs = () => {
  const { cancel, watch, select } = tabLabels;
  const [activeTab, setActiveTab] = useState(cancel);

  const handleClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <main>
      <section className="tabs">
        <div className="tabs-container">
          <IconContext.Provider value={{ size: "3rem" }}>
            <div
              className={activeTab === cancel && "tab-underline"}
              id="tab1"
              onClick={() => handleClick(cancel)}
            >
              <FaDoorOpen />
              <p>{cancel}</p>
            </div>
            <div
              className={activeTab === watch && "tab-underline"}
              id="tab2"
              onClick={() => handleClick(watch)}
            >
              <FaTabletAlt />
              <p>{watch}</p>
            </div>
            <div
              className={activeTab === select && "tab-underline"}
              id="tab3"
              onClick={() => handleClick(select)}
            >
              <FaTags />
              <p>{select}</p>
            </div>
          </IconContext.Provider>
        </div>
      </section>
      {/* Tab 1 */}
      {activeTab === cancel && (
        <section className="tab-content">
          <div className="tab-content-container">
            <div className="tab1-content-wrapper">
              <div className="tab1-content-text">
                <p className="tab1-text">
                  If you decide Netflix is not for you, no problem. Cancel
                  anytime.
                </p>
                <Link to="/register">
                  <button type="button">Watch free for 30 days</button>
                </Link>
              </div>
              <img src={tab1} alt="Tab" />
            </div>
          </div>
        </section>
      )}
      {/* Tab 2 */}
      {activeTab === watch && (
        <section className="tab-content">
          <div className="tab-content-container">
            <div className="tab2-content-top">
              <p className="tab2-text">
                Watch TV shows and movies anytime, anywhere - personalised for
                you.
              </p>
              <Link to="/register">
                <button type="button">Watch free for 30 days</button>
              </Link>
            </div>
            <div className="tab2-content-bottom">
              <div className="tab2-section1">
                <img src={tab2} alt="Monitor" />
                <p className="tab2-md">Watch on your TV</p>
                <p className="text-dark">
                  Smart TV, Xbox, Playstation, Chromecast, Apple TV and more.
                </p>
              </div>
              <div className="tab2-section2">
                <img src={tab2mobile} alt="Monitor and Phone" />
                <p className="tab2-md">Watch instantly or download for later</p>
                <p className="text-dark">
                  Available on phone or tablet, wherever you go.
                </p>
              </div>
            </div>
          </div>
        </section>
      )}
      {/* Tab 3 */}
      {activeTab === select && (
        <section className="tab-content">
          <div className="tab-content-container">
            <div className="text-center">
              <p className="tab3-text">
                Choose a plan to gain access to everything on Netflix
              </p>
              <Link to="/register">
                <button type="button">Watch free for 30 days</button>
              </Link>
            </div>
            <Table />
          </div>
        </section>
      )}
    </main>
  );
};

export default Tabs;
