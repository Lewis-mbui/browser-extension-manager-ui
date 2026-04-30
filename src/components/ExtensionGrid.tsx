import { useEffect, useState } from "react";

interface Extension {
  logo: string;
  name: string;
  description: string;
}

const ExtensionGrid = () => {
  const [extensions, setExtensions] = useState<Extension[]>([]);

  useEffect(() => {
    fetch("/src/data/data.json")
      .then((res) => res.json())
      .then((data) => setExtensions([...data]));
  }, []);

  return (
    <ul>
      {extensions.map((extension) => (
        <li>{extension.name}</li>
      ))}
    </ul>
  );
};

export default ExtensionGrid;
