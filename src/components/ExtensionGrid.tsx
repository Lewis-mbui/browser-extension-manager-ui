import useExtensions from "../hooks/useExtensions";
import ExtensionCard from "./ExtensionCard";

const ExtensionGrid = () => {
  const { extensions } = useExtensions();

  return (
    <ul className="extensions__list">
      {extensions.map((extension, index) => (
        <ExtensionCard key={index} extension={extension}></ExtensionCard>
      ))}
    </ul>
  );
};

export default ExtensionGrid;
