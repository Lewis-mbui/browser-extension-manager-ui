import { useState } from "react";
import ExtensionGrid from "./components/ExtensionGrid";
import FilterList from "./components/FilterList";
import Header from "./components/Header";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [filter, setFilter] = useState("all");
  const darkThemeClass = darkMode ? "dark-mode" : "";

  return (
    <div className={`app ${darkThemeClass}`}>
      <Header onToggleTheme={() => setDarkMode(!darkMode)} />
      <nav className="nav">
        <div className="nav__wrapper wrapper">
          <h1 className="extensions-title">Extensions List</h1>
          <FilterList
            currentFilter={filter}
            onSetFilter={(filter) => setFilter(filter)}
          />
        </div>
      </nav>
      <section className="extensions">
        <div className="extensions__wrapper wrapper">
          <ExtensionGrid currentFilter={filter} />
        </div>
      </section>
    </div>
  );
}

export default App;
