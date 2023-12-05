import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import galaxylogin from "../../assets/galaxylogin.png";
import galaxy1 from "../../assets/galaxy1.png";
import galaxy2 from "../../assets/galaxy2.png";
import carrito1 from "../../assets/carrito-compra1.png";
import carrito2 from "../../assets/carrito-compra2.png";
import carrito3 from "../../assets/carrito-compra4.png";
import cartVideo from "../../assets/carritoVideo.mp4";
import "./Proyectos.css";

interface projectsStructure {
  tipo: string;
  contenido: string;
}

const projectGalaxyData: projectsStructure[] = [
  { tipo: "imagen", contenido: galaxylogin },
  { tipo: "imagen", contenido: galaxy1 },
  { tipo: "imagen", contenido: galaxy2 },
  { tipo: "imagen", contenido: "" },
];

const projectShoppData: projectsStructure[] = [
  { tipo: "imagen", contenido: carrito1 },
  { tipo: "imagen", contenido: carrito2 },
  { tipo: "imagen", contenido: carrito3 },
  { tipo: "video", contenido: cartVideo },
];

const Proyectos = (): React.ReactElement => {
  const [galaxyIndex, setGalaxyIndex] = useState(0);
  const [cartIndex, setCartIndex] = useState(0);

  const handleGalaxyNextButton = () => {
    setGalaxyIndex((previousIndex) =>
      previousIndex === projectGalaxyData.length - 1 ? 0 : previousIndex + 1,
    );
  };

  const handleGalaxyPreviousButton = () => {
    setGalaxyIndex((previousIndex) =>
      previousIndex === 0 ? projectGalaxyData.length - 1 : previousIndex - 1,
    );
  };

  const handleShoppCartNextButton = () => {
    setCartIndex((previousIndex) =>
      previousIndex === projectGalaxyData.length - 1 ? 0 : previousIndex + 1,
    );
  };

  const handleShoppCartPreviousButton = () => {
    setCartIndex((previousIndex) =>
      previousIndex === 0 ? projectGalaxyData.length - 1 : previousIndex - 1,
    );
  };

  return (
    <div className="experience-content">
      <h2 className="projects-title">Proyectos</h2>
      <div className="projects">
        <div className="container-galaxyproject">
          <span className="title-project">Galaxy Padel Project</span>
          <AnimatePresence mode="wait">
            {projectGalaxyData.map(
              (project, position) =>
                position === galaxyIndex && (
                  <motion.div
                    key={position}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    style={{ display: "flex", justifyContent: "center" }}
                  >
                    {project.tipo === "imagen" && project.contenido !== "" ? (
                      <img
                        className="images-container"
                        src={project.contenido}
                        alt={`Proyecto ${position + 1}`}
                      />
                    ) : (
                      <video controls width="500">
                        <source src={project.contenido} type="video/mp4" />
                        Tu navegador no soporta el video.
                      </video>
                    )}
                  </motion.div>
                ),
            )}
          </AnimatePresence>
          <div className="buttons-container">
            <button
              className="solid-button"
              onClick={handleGalaxyPreviousButton}
            >
              {"<"}
            </button>
            <button className="solid-button" onClick={handleGalaxyNextButton}>
              {">"}
            </button>
          </div>
        </div>
        <div className="container-galaxyproject">
          <span className="title-project">Shopping Cart Project</span>
          <AnimatePresence mode="wait">
            {projectShoppData.map(
              (project, position) =>
                position === cartIndex && (
                  <motion.div
                    key={position}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    style={{ display: "flex", justifyContent: "center" }}
                  >
                    {project.tipo === "imagen" && project.contenido !== "" ? (
                      <img
                        className="images-container"
                        src={project.contenido}
                        alt={`Proyecto ${position + 1}`}
                      />
                    ) : (
                      <video controls width="500">
                        <source src={project.contenido} type="video/mp4" />
                        Tu navegador no soporta el video.
                      </video>
                    )}
                  </motion.div>
                ),
            )}
          </AnimatePresence>
          <div className="buttons-container">
            <button
              className="solid-button"
              onClick={handleShoppCartPreviousButton}
            >
              {"<"}
            </button>
            <button
              className="solid-button"
              onClick={handleShoppCartNextButton}
            >
              {">"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Proyectos;
