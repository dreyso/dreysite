import "./app.css";
import Banner from "./banner/banner";
import Sections from "./sections/sections";
import { sections, sectionIds } from './sections/sections';

function App() {
  return (
    <>
      <Banner sections={sections} sectionIds={sectionIds} />
      <main>
        <Sections />
        <footer className="centered">
          <p>© 2024 Andrey Steblyakov. All Rights Reserved.</p>
        </footer>
      </main>
    </>
  );
}

export default App;

