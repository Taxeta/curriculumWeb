import fotoCV from "../../assets/fotoCV.jpg";
import { motion } from "framer-motion";
import "./Presentacion.css";

const Presentacion = (): React.ReactElement => {
  return (
    <section className="presentacion">
      <motion.img
        className="presentacon-img"
        src={fotoCV}
        alt="foto jose manuel"
        width={"260"}
        height={"270"}
        transition={{ duration: 3 }}
        animate={{
          scale: [1, 1, 1.2, 1.2, 1, 1],
          rotate: [0, 1, 30, 0, 30, 0],
          borderRadius: ["0%", "0%", "10%", "30%", "40%", "50%"],
        }}
      />
      <div className="presentacion-container">
        <p className="presentacion__introduccion">
          Bienvenidos a mi porfolio, soy...
        </p>
        <h1 className="presentacion__titulo">Jose Manuel Vera Guerrero</h1>
        <h2 className="presentacion__subtitulo">
          Junior especialista Front-end, enfocado en Stack MERN aunque capaz de
          adaptarme a cualquier tecnología.
        </h2>
        <article className="presentacion__parrafo">
          <p>
            La enseñanza más grande que he aprendido de la programación hasta
            ahora es en esencia la habilidad de solucionar cualquier problema
            digital utilizando la lógica y el código como herramientas.
          </p>
          <p>
            Para mi cada línea de código es un paso más hacia la solución de un
            rompecabezas. Todo esto implica realizar un análisis de los
            problemas y diseñar algoritmos eficaces para encontrar una solución.
          </p>
          <p>
            Es por eso que una vez encuentro la solución, hago pruebas unitarias
            y de integración para verificar la correcta funcionalidad.
          </p>
        </article>
      </div>
    </section>
  );
};

export default Presentacion;
