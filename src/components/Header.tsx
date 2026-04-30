interface Props {
  onToggleTheme: () => void;
}

const Header = ({ onToggleTheme }: Props) => {
  return (
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
        <button
          onClick={onToggleTheme}
          className="btn btn--theme-toggle"
        ></button>
      </div>
    </header>
  );
};

export default Header;
