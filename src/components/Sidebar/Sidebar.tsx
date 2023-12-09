import "./Sidebar.css";
import { useState } from "react";

const Sidebar = (): React.ReactElement => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const handleActiveReference = (section: string) => {
    setActiveSection(section);
  };

  return (
    <ul className="horitzontal-nav">
      <li
        className={
          activeSection === "inicio"
            ? "horitzontal-nav--items__active"
            : "horitzontal-nav--items"
        }
      >
        <a href="#inicio" onClick={() => handleActiveReference("inicio")}>
          Presentación
        </a>
      </li>
      <li
        className={
          activeSection === "proyectos"
            ? "horitzontal-nav--items__active"
            : "horitzontal-nav--items"
        }
      >
        <a href="#proyectos" onClick={() => handleActiveReference("proyectos")}>
          Proyectos
        </a>
      </li>
      <li
        className={
          activeSection === "experiencia"
            ? "horitzontal-nav--items__active"
            : "horitzontal-nav--items"
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
            ? "horitzontal-nav--items__active"
            : "horitzontal-nav--items"
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
