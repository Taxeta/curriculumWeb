import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import galaxylogin from "../../assets/galaxylogin.png";
import galaxy1 from "../../assets/galaxy1.png";
import galaxy2 from "../../assets/galaxy2.png";
import galaxy3 from "../../assets/galaxy-form.png";
import carrito1 from "../../assets/carrito-compra1.png";
import carrito2 from "../../assets/carrito-compra2.png";
import carrito3 from "../../assets/carrito-compra3.png";
import carrito4 from "../../assets/carrito-compra4.png";
import cartVideo from "../../assets/carritoVideo.mp4";
import galaxyPadelVideo from "../../assets/GalaxyPadelVideo.mp4";
import github from "../../assets/github.png";
import app from "../../assets/app.png";
import nextarrow from "../../assets/next.png";
import previousarrow from "../../assets/previous.png";
import "./Proyectos.css";

interface projectsStructure {
  tipo: string;
  contenido: string;
}

const projectGalaxyData: projectsStructure[] = [
  { tipo: "imagen", contenido: galaxylogin },
  { tipo: "imagen", contenido: galaxy2 },
  { tipo: "imagen", contenido: galaxy1 },
  { tipo: "imagen", contenido: galaxy3 },
  { tipo: "video", contenido: galaxyPadelVideo },
];

const projectShoppData: projectsStructure[] = [
  { tipo: "imagen", contenido: carrito1 },
  { tipo: "imagen", contenido: carrito2 },
  { tipo: "imagen", contenido: carrito3 },
  { tipo: "imagen", contenido: carrito4 },
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
    <div className="project-content">
      <h2 className="projects-title">Proyectos</h2>
      <div className="projects">
        <div className="container-project">
          <span className="title-project">Galaxy Padel Project</span>
          <div className="icons">
            <a
              href="https://github.com/Taxeta/GalaxyPadel-front.git"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="icon-button">
                <img src={github} alt="github icon" width={28} height={28} />
              </button>
            </a>
            <a
              href="https://galaxypadel.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="icon-button">
                <img src={app} alt="app icon" width={28} height={28} />
              </button>
            </a>
          </div>
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
                        width="80%"
                        height="80%"
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
              className="solid-icon-button"
              onClick={handleGalaxyPreviousButton}
            >
              <img
                src={previousarrow}
                alt="previous arrow"
                width={38}
                height={38}
              />
            </button>
            <button
              className="solid-icon-button"
              onClick={handleGalaxyNextButton}
            >
              <img src={nextarrow} alt="next arrow" width={38} height={38} />
            </button>
          </div>
        </div>
        <div className="container-project">
          <span className="title-project">Shopping Cart Project</span>
          <div className="icons">
            <a
              href="https://github.com/Taxeta/shoppingCart.git"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="icon-button">
                <img src={github} alt="github icon" width={28} height={28} />
              </button>
            </a>
            <a
              href="https://phone-cart-tecnicalprobe.netlify.app/phones"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="icon-button">
                <img src={app} alt="app icon" width={28} height={28} />
              </button>
            </a>
          </div>
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
                        width="80%"
                        height="80%"
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
              className="solid-icon-button"
              onClick={handleShoppCartPreviousButton}
            >
              <img
                src={previousarrow}
                alt="previous arrow"
                width={38}
                height={38}
              />
            </button>
            <button
              className="solid-icon-button"
              onClick={handleShoppCartNextButton}
            >
              <img src={nextarrow} alt="next arrow" width={38} height={38} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Proyectos;
