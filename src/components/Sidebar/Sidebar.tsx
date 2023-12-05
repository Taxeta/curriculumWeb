import "./Sidebar.css";

const Sidebar = (): React.ReactElement => {
  return (
    <ul className="horitzontal-nav">
      <li className="horitzontal-nav--items">Presentación</li>
      <li className="horitzontal-nav--items">Experiencia</li>
      <li className="horitzontal-nav--items">Proyectos</li>
      <li className="horitzontal-nav--items">Contacto</li>
    </ul>
  );
};

export default Sidebar;
