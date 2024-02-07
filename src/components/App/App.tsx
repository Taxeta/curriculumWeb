import Contacto from "../../pages/Contacto/Contacto";
import Experiencia from "../../pages/Experiencia/Experiencia";
import Presentacion from "../../pages/Presentacion/Presentacion";
import Sidebar from "../Sidebar/Sidebar";
import { motion, useScroll } from "framer-motion";
import Proyectos from "../../pages/Proyectos/Proyectos";
import BurgerSidebar from "../BurgerSidebar/BurgerSidebar";
import "./App.css";

const App = (): React.ReactElement => {
  const { scrollYProgress } = useScroll();

  const isMobile = window.innerWidth <= 767;

  return (
    <main className="main-container">
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
      {isMobile ? (
        <BurgerSidebar />
      ) : (
        <Sidebar isOpen={false} closeSideBar={() => {}} />
      )}
      <div className="body-container">
        <div id="presentacion">
          <Presentacion />
        </div>
        <div id="proyectos">
          <Proyectos />
        </div>
        <div id="experiencia">
          <Experiencia />
        </div>
        <div id="contacto">
          <Contacto />
        </div>
        <div className="footer">
          <span>
            Copyright © {new Date().getFullYear()}. Todos los derechos
            reservados.
          </span>
          <span className="footer__dev">Developed by Jose Vera with ♥</span>
        </div>
      </div>
    </main>
  );
};

export default App;
