import { useEffect, useState } from "react";

interface Extension {
  logo: string;
  name: string;
  description: string;
}

const useExtensions = () => {
  const [extensions, setExtensions] = useState<Extension[]>([]);

  useEffect(() => {
    fetch("/src/data/data.json")
      .then((res) => res.json())
      .then((data) => setExtensions([...data]));
  }, []);

  return { extensions };
};

export default useExtensions;
