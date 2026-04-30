import ExtensionGrid from "./components/ExtensionGrid";
import FilterList from "./components/FilterList";

function App() {
  return (
    <div className="app">
      <header className="header">
        <div className="header__wrapper wrapper">
          <a href="/">
            <svg className="header__logo header__logo--dark">
              <use href="/icons.svg#logo"></use>
            </svg>
            <svg className="header__logo header__logo--light">
              <use href="/icons.svg#logo-light"></use>
            </svg>
          </a>
          <button className="btn btn--theme-toggle"></button>
        </div>
      </header>
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
