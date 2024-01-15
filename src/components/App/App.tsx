import Contacto from "../../pages/Contacto/Contacto";
import Experiencia from "../../pages/Experiencia/Experiencia";
import Presentacion from "../../pages/Presentacion/Presentacion";
import Sidebar from "../Sidebar/Sidebar";
import { motion, useScroll } from "framer-motion";
import Proyectos from "../../pages/Proyectos/Proyectos";
import BurgerSidebar from "../BurgerSidebar/BurgerSidebar";
import "./App.css";
import { useEffect, useState } from "react";

const App = (): React.ReactElement => {
  const [showBanner, setShowBanner] = useState(true);
  const { scrollYProgress } = useScroll();

  const isMobile = window.innerWidth <= 767;

  useEffect(() => {
    const bannerTimer = setTimeout(() => {
      setShowBanner(false);
    }, 3000);

    return () => clearTimeout(bannerTimer);
  }, []);

  return (
    <main className="main-container">
      {showBanner ? (
        <div className="introduction-container">
          <span className="presentacion__introduction">
            Bienvenidos a mi porfolio <br />
            soy...
          </span>
        </div>
      ) : (
        <>
          <motion.div
            className="progress-bar"
            style={{ scaleX: scrollYProgress }}
          />
          {isMobile ? <BurgerSidebar /> : <Sidebar isOpen={false} />}
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
            </div>
          </div>
        </>
      )}
    </main>
  );
};

export default App;
