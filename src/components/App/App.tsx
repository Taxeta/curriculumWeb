import Contacto from "../../pages/Contacto/Contacto";
import Experiencia from "../../pages/Experiencia/Experiencia";
import Presentacion from "../../pages/Presentacion/Presentacion";
import Sidebar from "../Sidebar/Sidebar";
import { motion, useScroll } from "framer-motion";
import "./App.css";
import Proyectos from "../../pages/Proyectos/Proyectos";

const App = (): React.ReactElement => {
  const { scrollYProgress } = useScroll();

  return (
    <main className="main-container">
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
      <Sidebar />
      <div className="body-container">
        <Presentacion />
        <Proyectos />
        <Experiencia />
        <Contacto />
      </div>
    </main>
  );
};

export default App;
