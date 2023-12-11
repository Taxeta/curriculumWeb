import "./Experiencia.css";
import puntos from "../../assets/puntos.png";

const Experiencia = (): React.ReactElement => {
  return (
    <div className="experience">
      <h3 className="main-title">Experiencia</h3>
      <section className="experience-container">
        <article className="experience-cards">
          <p className="title-experience">Isdi Coders Bootcamp - Prácticas</p>
          <p className="subtitle-experience">
            Isdi Coders | Enero 2023 - Septiembre 2023
          </p>
          <ul className="list-experience">
            <li>
              <img
                className="puntos"
                src={puntos}
                width={12}
                height={12}
                alt="puntos"
              />
              Proyectos individuales y colectivos con GitHub (con github actions
              y secrets), Jest testing, renderizados en Netlify.
            </li>
            <li>
              <img
                className="puntos"
                src={puntos}
                width={12}
                height={12}
                alt="puntos"
              />
              Buenas prácticas, CI/CD, aplicando SOLID y buena estructura HTML y
              CSS
            </li>
            <li>
              <img
                className="puntos"
                src={puntos}
                width={12}
                height={12}
                alt="puntos"
              />
              Stack utilizado MongoDB, Express, React, NodeJs
            </li>
            <li>
              <img
                className="puntos"
                src={puntos}
                width={12}
                height={12}
                alt="puntos"
              />
              Control y corrección de actividades con Javascript de nuevos
              alumnos
            </li>
          </ul>
        </article>
        <article className="experience-cards">
          <p className="title-experience">SetUp - Web Developer Junior</p>
          <p className="subtitle-experience">
            SetUp | Marzo 2021 - Noviembre 2022
          </p>
          <ul className="list-experience">
            <li>
              <img
                className="puntos"
                src={puntos}
                width={12}
                height={12}
                alt="puntos"
              />
              Typescript, React, Firebase, Redux, Jest, Vite.
            </li>
            <li>
              <img
                className="puntos"
                src={puntos}
                width={12}
                height={12}
                alt="puntos"
              />
              Trabajo en equipo 4-6 personas.
            </li>
            <li>
              <img
                className="puntos"
                src={puntos}
                width={12}
                height={12}
                alt="puntos"
              />
              Daily Scrum meets.
            </li>
            <li>
              <img
                className="puntos"
                src={puntos}
                width={12}
                height={12}
                alt="puntos"
              />
              Control de versiones Github.
            </li>
            <li>
              <img
                className="puntos"
                src={puntos}
                width={12}
                height={12}
                alt="puntos"
              />
              Corrección y refactorización de código.
            </li>
            <li>
              <img
                className="puntos"
                src={puntos}
                width={12}
                height={12}
                alt="puntos"
              />
              Unit Test, Integration Test, End-to-End Test.
            </li>
          </ul>
        </article>
        <article className="experience-cards">
          <p className="title-experience">Dependiente - Encargado</p>
          <p className="subtitle-experience">
            Casa Ametller | Enero 2019 - Julio 2020
          </p>
          <ul className="list-experience">
            <li>
              <img
                className="puntos"
                src={puntos}
                width={12}
                height={12}
                alt="puntos"
              />
              Encargado de tienda en horario de tarde.
            </li>
            <li>
              <img
                className="puntos"
                src={puntos}
                width={12}
                height={12}
                alt="puntos"
              />
              Gestión de stocks, reposición de productos, organización de
              tienda.
            </li>
            <li>
              <img
                className="puntos"
                src={puntos}
                width={12}
                height={12}
                alt="puntos"
              />
              Caja, Atención al cliente y cierre de cajas.
            </li>
          </ul>
        </article>
        <article className="experience-cards">
          <p className="title-experience">Otros trabajos</p>
          <p className="subtitle-experience">
            Otros trabajos | Enero 2014 - Diciembre 2018
          </p>
          <ul className="list-experience">
            <li>
              <img
                className="puntos"
                src={puntos}
                width={12}
                height={12}
                alt="puntos"
              />
              Camarero - VolkartBar Alemania
            </li>
            <li>
              <img
                className="puntos"
                src={puntos}
                width={12}
                height={12}
                alt="puntos"
              />
              Dependiente - Supermercado EDEKA SüdBayern Münich
            </li>
            <li>
              <img
                className="puntos"
                src={puntos}
                width={12}
                height={12}
                alt="puntos"
              />
              Dependiente - Decathlon Sant Boi
            </li>
          </ul>
        </article>
      </section>
    </div>
  );
};

export default Experiencia;
