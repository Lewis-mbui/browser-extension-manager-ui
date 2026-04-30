import useExtensions from "../hooks/useExtensions";

const ExtensionGrid = () => {
  const { extensions } = useExtensions();

  return (
    <ul>
      {extensions.map((extension, index) => (
        <li key={index}>{extension.name}</li>
      ))}
    </ul>
  );
};

export default ExtensionGrid;
