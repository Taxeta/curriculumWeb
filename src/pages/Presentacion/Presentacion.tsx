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
import nextjs from "../../assets/nextJs.png";
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
          <h1 className="presentacion__titulo">Jose Manuel Vera</h1>
          <h2 className="presentacion__subtitulo">
            Web Developer Fullstack especializado en Stack MERN
          </h2>
          <article className="presentacion__parrafo">
            <p>
              Formado en{" "}
              <strong>ISDI Coders, mejor bootcamp SwitchUp 2023</strong>
            </p>
            <p>
              He adquirido la{" "}
              <strong>capacidad de resolver problemas digitales </strong>
              utilizando la lógica y la programación como herramientas
              fundamentales.
            </p>
            <p>
              Cada línea de código que escribo es como un paso hacia la
              resolución de un rompecabezas digital. Mi enfoque implica un
              <strong> análisis minucioso</strong> de los problemas, seguido del
              diseño de algoritmos eficaces para encontrar soluciones.
            </p>
            <p>
              Una vez encuentro la solución, hago{" "}
              <strong>pruebas unitarias, de integración y end-to-end</strong>{" "}
              para verificar la correcta funcionalidad del código.
            </p>
            <p>
              Soy una persona <strong>resolutiva</strong> que no toma decisiones
              a la ligera. Mi capacidad para adaptarme a cualquier tecnología me
              permite abordar una amplia gama de desafíos. Estoy comprometido
              con la <strong>excelencia</strong> y la{" "}
              <strong>mejora continua</strong> en mi trabajo.
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
          <img src={mongodb} alt="mongodb icon" width={118} height={98} />
          <img src={express} alt="express icon" width={218} height={68} />
          <img src={node} alt="node icon" width={68} height={68} />
          <img src={firebase} alt="firebase icon" width={68} height={68} />
          <img src={jest} alt="jest icon" width={68} height={68} />
          <img src={cypress} alt="cypress icon" width={68} height={68} />
          <img src={nextjs} alt="cypress icon" width={68} height={68} />
        </div>
      </section>
    </>
  );
};

export default Presentacion;
