import "./base.css";
import "./style.css";

function Records() {
  return (
    <section id="records" className="main-section centered">
    <h2 className="highlight-first">Records</h2>
    <div className="content-wrapper centered">
      <div className="text-wrapper centered">
        <a href="assets/imgs/urmp.webp"
          ><h3>
            Software Engineering Intern, Portland State Aerospace Society,
            Portland, OR 6/2023 - 10/2023<br />
            Software for OreSat 0.5, Oregon’s second satellite.
          </h3>
        </a>
        <ul>
          <li>
            Created a REST API to simplify command delivery and testing,
            allowing PSAS to send and receive commands through web browsers,
            improving accessibility and usability.
          </li>
          <li>
            Contributed to the OreSat Linux App Framework (OLAF), completing
            the star tracker app to determine attitude and capture Earth and
            space photos.
          </li>
        </ul>
      </div>
      <div className="text-wrapper centered">
        <a href="https://github.com/Monarch-Capstone-Parqe/CapstoneParqe">
          <h3>
            Backend Developer, Electronics Prototyping Lab, Portland State
            University, Portland, OR 6/2023 - 10/2023<br />
            PrusaSlicer Automated Routing and Quoting Engine (PARQE).
          </h3>
        </a>
        <ul>
          <li>
            Efficiently routed data and requests between Flask, Octoprint,
            and PostgreSQL.
          </li>
          <li>
            Handled database operations, such as storage, retrieval, and
            organization, to support the overall functionality of the
            system.
          </li>
          <li>
            Implemented robust data validation and error handling mechanisms
            to ensure the reliability of the entire workflow.
          </li>
        </ul>
      </div>
    </div>
  </section>
  );
}

export default Records;
