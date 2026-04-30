import useExtensionsContext from "../hooks/useExtensionsContext";
import ExtensionCard from "./ExtensionCard";

const ExtensionGrid = () => {
  const { extensions } = useExtensionsContext();
  console.log(extensions);

  return (
    <ul className="extensions__list">
      {extensions.map((extension) => (
        <ExtensionCard key={extension.id} extension={extension}></ExtensionCard>
      ))}
    </ul>
  );
};

export default ExtensionGrid;
