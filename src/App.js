import "./App.css";
import Dictionary from "./Dictionary";
import pexelsLogo from "./pexelsLogo.jpg";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>
            <span className="blue">D</span>
            <span className="red">i</span>
            <span className="yellow">c</span>
            <span className="blue">t</span>
            <span className="green">i</span>
            <span className="red">o</span>
            <span className="blue">n</span>
            <span className="red">a</span>
            <span className="yellow">r</span>
            <span className="green">y</span>
          </h1>
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer text-center">
          <small>
            <a
              href="https://github.com/mml95/dictionary-app-react"
              target="_blank"
              rel="noreferrer"
            >
              Open-source
            </a>{" "}
            <span className="lighten">by</span>{" "}
            <a href="mailto:mml@mml95.dev" target="_blank" rel="noreferrer">
              MML
            </a>{" "}
            <a href="https://www.pexels.com/" target="_blank" rel="noreferrer">
              <img
                src={pexelsLogo}
                alt="Pexels logo"
                title="Pexels logo"
                height="12"
                width="12"
                className="mb-1"
              />
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}

export default App;
