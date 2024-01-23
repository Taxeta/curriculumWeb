import "./Experiencia.css";
import puntos from "../../assets/puntos.png";

const Experiencia = (): React.ReactElement => {
  return (
    <div className="experience">
      <h3 className="main-title">Experiencia</h3>
      <section className="experience-container">
        <article className="experience-cards">
          <p className="title-experience">Freelance</p>
          <p className="subtitle-experience">
            Freelance | Noviembre 2023 - Actualidad
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
              Desarrollo <strong>marca personal</strong>.
            </li>
            <li>
              <img
                className="puntos"
                src={puntos}
                width={12}
                height={12}
                alt="puntos"
              />
              Proyectos desarollados con Stack MERN.
            </li>
            <li>
              <img
                className="puntos"
                src={puntos}
                width={12}
                height={12}
                alt="puntos"
              />
              Proyectos centrados en buenas prácticas(
              <strong>agile, solid, bem</strong>), CI/CD y codigo sostenible.
            </li>
            <li>
              <img
                className="puntos"
                src={puntos}
                width={12}
                height={12}
                alt="puntos"
              />
              Control de versiones <strong>Github</strong>, plantillas con{" "}
              <strong>figma</strong>.
            </li>
            <li>
              <img
                className="puntos"
                src={puntos}
                width={12}
                height={12}
                alt="puntos"
              />
              <strong> Accesibilidad</strong> enfocada al usuario.
            </li>
            <li>
              <img
                className="puntos"
                src={puntos}
                width={12}
                height={12}
                alt="puntos"
              />
              <strong>
                Unit Test, Integration Test, End-to-End Test (cypress y Jest).
              </strong>
            </li>
          </ul>
        </article>
        <article className="experience-cards">
          <p className="title-experience">Isdi Coders Bootcamp</p>
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
              <strong>Proyectos individuales y en equipo</strong> con GitHub
              control de versiones (con github actions y secrets), Jest testing,
              renderizados en Netlify. Más de <strong>1400h de trabajo.</strong>
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
              CSS.
            </li>
            <li>
              <img
                className="puntos"
                src={puntos}
                width={12}
                height={12}
                alt="puntos"
              />
              Stack utilizado MongoDB, Express, React, NodeJs.
            </li>
            <li>
              <img
                className="puntos"
                src={puntos}
                width={12}
                height={12}
                alt="puntos"
              />
              <strong> Proyecto final GalaxyPadel:</strong> Aplicación para
              amantes del padel, permite obtener información de una
              <strong> API Rest </strong>
              montada por mi mismo sobre estadísticas de palas de padel, dónde
              los usuarios pueden <strong>modificar, crear y eliminar </strong>
              palas. Enfocada a compartir información entre usuarios para
              encontrar la pala afín a cada persona.
            </li>
          </ul>
        </article>

        <article className="experience-cards">
          <p className="title-experience">Dependiente - Encargado</p>
          <p className="subtitle-experience">
            Casa Ametller | Enero 2019 - Diciembre 2022
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
              Encargado de tienda, gestión de stocks y de personal (turno
              tarde).
            </li>
            <li>
              <img
                className="puntos"
                src={puntos}
                width={12}
                height={12}
                alt="puntos"
              />
              <strong>Supervisando números de ventas</strong> (crecimiento
              80%-100% anual).
              <strong> Motivador </strong>de equipo basado en estadísticas. Más
              de 100mil € de ingresos mensuales con todo el equipo de tienda.
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
            <li>
              <img
                className="puntos"
                src={puntos}
                width={12}
                height={12}
                alt="puntos"
              />
              <strong>Resolución</strong> de más de 200{" "}
              <strong>incidencias</strong> al año.
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
