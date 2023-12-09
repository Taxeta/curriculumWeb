import "./Contacto.css";
import phone from "../../assets/phone.png";
import email from "../../assets/email.png";
import linkedin from "../../assets/linkedin.png";
import maps from "../../assets/maps.png";

const Contacto = (): React.ReactElement => {
  return (
    <section className="info-contact">
      <a href={`mailto: josemanuelvera1991@gmail.com`}>
        <button className="info-button">
          <img
            className="icon-container"
            src={email}
            alt="email icon"
            width={48}
            height={48}
          />
          josemanuelvera1991@gmail.com
        </button>
      </a>
      <a
        href="https://www.linkedin.com/in/jose-manuel-vera-guerrero"
        target="_blank"
      >
        <button className="info-button">
          <img
            className="icon-container"
            src={linkedin}
            alt="linkedin icon"
            width={48}
            height={48}
          />
          LinkedIn
        </button>
      </a>
      <span className="info-button">
        <img
          className="icon-container"
          src={phone}
          alt="phone icon"
          width={48}
          height={48}
        />
        +34 665 403 133
      </span>
      <a
        href="https://www.google.es/maps/place/Carrer+Josep+Vicen%C3%A7+Foix,+7,+08750+Molins+de+Rei,+Barcelona/@41.4135365,2.0253101,17z/data=!3m1!4b1!4m6!3m5!1s0x12a49a87d6372975:0x11bc4057fe136ba3!8m2!3d41.4135365!4d2.0253101!16s%2Fg%2F11bw4142pt?entry=ttu"
        target="_blank"
      >
        <button className="info-button">
          <img
            className="icon-container"
            src={maps}
            alt="adress icon"
            width={48}
            height={48}
          />
          c/ Josep Vicenç Foix 7, Molins de Rei, Bcn 08750
        </button>
      </a>
    </section>
  );
};

export default Contacto;
