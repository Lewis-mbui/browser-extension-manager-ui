import useExtensionsContext from "../hooks/useExtensionsContext";
import ExtensionCard from "./ExtensionCard";

interface Props {
  currentFilter: string;
}

const ExtensionGrid = ({ currentFilter }: Props) => {
  const { extensions } = useExtensionsContext();
  const visibleExtensions = extensions.filter((e) => {
    if (currentFilter === "all") return e;
    if (currentFilter === "active") return e.isActive;
    if (currentFilter === "inactive") return !e.isActive;
  });

  return (
    <ul className="extensions__list">
      {visibleExtensions.map((extension) => (
        <ExtensionCard key={extension.id} extension={extension}></ExtensionCard>
      ))}
    </ul>
  );
};

export default ExtensionGrid;
