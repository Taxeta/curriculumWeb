import fotoCV from "../../assets/fotoCV.jpg";
import { motion } from "framer-motion";
import javascript from "../../assets/javascript.png";
import mongodb from "../../assets/mongoDB.png";
import express from "../../assets/expressJS.png";
import typescript from "../../assets/typescript.png";
import react from "../../assets/react.png";
import redux from "../../assets/redux.png";
import firebase from "../../assets/firebase.png";
import jest from "../../assets/jest.png";
import node from "../../assets/nodeJS.png";
import cypress from "../../assets/crypress.png";
import html from "../../assets/html.png";
import css from "../../assets/css.png";
import "./Presentacion.css";

const Presentacion = (): React.ReactElement => {
  return (
    <>
      <section className="presentacion">
        <motion.img
          className="presentacon-img"
          src={fotoCV}
          alt="foto jose manuel"
          width={"260"}
          height={"270"}
          transition={{ duration: 3 }}
          animate={{
            scale: [1, 1.2, 1.2, 1, 1],
            rotate: [0, 30, 30, 30, 0],
            borderRadius: ["0%", "10%", "30%", "40%", "50%"],
          }}
        />
        <div className="presentacion-container">
          <p className="presentacion__introduccion">
            Bienvenidos a mi porfolio, soy...
          </p>
          <h1 className="presentacion__titulo">Jose Manuel Vera Guerrero</h1>
          <h2 className="presentacion__subtitulo">
            Junior especialista Front-end, enfocado en Stack MERN aunque capaz
            de adaptarme a cualquier tecnología.
          </h2>
          <article className="presentacion__parrafo">
            <p>
              La enseñanza más grande que he aprendido de la programación hasta
              ahora es en esencia la habilidad de solucionar cualquier problema
              digital utilizando la lógica y el código como herramientas.
            </p>
            <p>
              Para mi cada línea de código es un paso más hacia la solución de
              un rompecabezas. Todo esto implica realizar un análisis de los
              problemas y diseñar algoritmos eficaces para encontrar una
              solución.
            </p>
            <p>
              Es por eso que una vez encuentro la solución, hago pruebas
              unitarias y de integración para verificar la correcta
              funcionalidad.
            </p>
          </article>
        </div>
      </section>
      <section className="habilidades">
        <h3 className="habilidades__titulo">Skills</h3>
        <div className="habilidades__iconos">
          <img src={html} alt="html icon" width={68} height={68} />
          <img src={css} alt="css icon" width={68} height={68} />
          <img src={javascript} alt="js icon" width={68} height={68} />
          <img src={typescript} alt="ts icon" width={68} height={68} />
          <img src={react} alt="react icon" width={68} height={68} />
          <img src={redux} alt="redux icon" width={68} height={68} />
          <img src={mongodb} alt="mongodb icon" width={118} height={88} />
          <img src={express} alt="express icon" width={168} height={68} />
          <img src={node} alt="node icon" width={68} height={68} />
          <img src={firebase} alt="firebase icon" width={68} height={68} />
          <img src={jest} alt="jest icon" width={68} height={68} />
          <img src={cypress} alt="cypress icon" width={68} height={68} />
        </div>
      </section>
    </>
  );
};

export default Presentacion;
