import burger from "../../assets/burger.png";
import { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import "./BurgerSidebar.css";

const BurgerSidebar = (): React.ReactElement => {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  const closeSideBar = () => {
    setSidebarVisible(false);
  };

  return (
    <div className="burger-container">
      <button className="burger-button" onClick={toggleSidebar}>
        <img src={burger} alt="burger image" width={48} height={48} />
      </button>
      {sidebarVisible && (
        <Sidebar isOpen={sidebarVisible} closeSideBar={closeSideBar} />
      )}
    </div>
  );
};

export default BurgerSidebar;
