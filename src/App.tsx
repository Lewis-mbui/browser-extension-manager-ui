import { useState } from "react";
import ExtensionGrid from "./components/ExtensionGrid";
import FilterList from "./components/FilterList";
import Header from "./components/Header";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const darkThemeClass = darkMode ? "dark-mode" : "";

  return (
    <div className={`app ${darkThemeClass}`}>
      <Header onToggleTheme={() => setDarkMode(!darkMode)} />
      <nav className="nav">
        <div className="nav__wrapper wrapper">
          <h1 className="extensions-title">Extensions List</h1>
          <FilterList />
        </div>
      </nav>
      <section className="extensions">
        <div className="extensions__wrapper wrapper">
          <ExtensionGrid />
        </div>
      </section>
    </div>
  );
}

export default App;
