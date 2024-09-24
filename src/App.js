import "./base.css";
import "./style.css";
import Banner from "./banner/banner";
import Abode from "./abode";
import Narrative from "./narrative";
import Details from "./details";
import Records from "./records";
import Endeavors from "./endeavors";
import Yours from "./yours";

function App() {
  return (
    <>
      <Banner />
      <main>
        <Abode />
        <Narrative />
        <Details />
        <Records />
        <Endeavors />
        <Yours />
        <footer className="centered">
          <p>© 2024 Andrey Steblyakov. All Rights Reserved.</p>
        </footer>
      </main>
    </>
  );
}

export default App;
