import "./Sidebar.css";
import { useState } from "react";

interface sidebarProp {
  isOpen: boolean;
}

const Sidebar = ({ isOpen }: sidebarProp): React.ReactElement => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const handleActiveReference = (section: string) => {
    setActiveSection(section);
  };

  const backgroundClass = isOpen ? "vertical-nav-open" : "vertical-nav";

  return (
    <ul className={backgroundClass}>
      <li
        className={
          activeSection === "presentacion"
            ? "vertical-nav--items__active"
            : "vertical-nav--items"
        }
      >
        <a
          href="#presentacion"
          onClick={() => handleActiveReference("presentacion")}
        >
          Presentación
        </a>
      </li>
      <li
        className={
          activeSection === "proyectos"
            ? "vertical-nav--items__active"
            : "vertical-nav--items"
        }
      >
        <a href="#proyectos" onClick={() => handleActiveReference("proyectos")}>
          Proyectos
        </a>
      </li>
      <li
        className={
          activeSection === "experiencia"
            ? "vertical-nav--items__active"
            : "vertical-nav--items"
        }
      >
        <a
          href="#experiencia"
          onClick={() => handleActiveReference("experiencia")}
        >
          Experiencia
        </a>
      </li>
      <li
        className={
          activeSection === "contacto"
            ? "vertical-nav--items__active"
            : "vertical-nav--items"
        }
      >
        <a href="#contacto" onClick={() => handleActiveReference("contacto")}>
          Contacto
        </a>
      </li>
    </ul>
  );
};

export default Sidebar;
