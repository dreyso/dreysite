import "./sections.css";
import headshot from "../assets/imgs/abode.webp"

function Abode() {
  return (
    <header id="abode" className="main-section">
      <div className="upper-wrapper centered">
        <h1>
          Hi, <br />
          I'm
          <span className="highlight">Andrey</span>
        </h1>
        <img
          src={headshot}
          width="1812"
          height="2500"
          className="fade-down"
          alt="Authors headshot"
        />
      </div>
      <div className="lower-wrapper centered">
        <p>
          As a student, I chase the bounds of computing. As a veteran, I will
          push them further yet.
        </p>
      </div>
    </header>
  );
}

export default Abode;
