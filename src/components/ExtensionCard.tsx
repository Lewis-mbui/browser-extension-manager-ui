import type Extension from "../entities/Extension";

interface Props {
  extension: Extension;
}

const ExtensionCard = ({ extension }: Props) => {
  const { isActive } = extension;
  const activeClass = isActive ? "active" : "";
  return (
    <li className="extension">
      <div className="extension__grid">
        <img src={extension.logo} alt="" />
        <div className="extension__content">
          <h2>{extension.name}</h2>
          <p className="extension__text">{extension.description}</p>
        </div>
      </div>
      <div className="extension__actions">
        <button className="btn btn--primary btn--remove">Remove</button>
        <button className={`btn btn--extension-toggle ${activeClass}`}></button>
      </div>
    </li>
  );
};

export default ExtensionCard;
