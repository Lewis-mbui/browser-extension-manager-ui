import { useContext } from "react";
import ExtensionsContext from "../contexts/ExtensionsContext";

const useExtensionsContext = () => useContext(ExtensionsContext);

export default useExtensionsContext;
