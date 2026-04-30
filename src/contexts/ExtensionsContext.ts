import { createContext, type Dispatch } from "react";
import type Extension from "../entities/Extension";
import type { ExtensionAction } from "../providers/ExtensionsProvider";

interface ExtensionsContextType {
  extensions: Extension[];
  dispatch: Dispatch<ExtensionAction>;
}

const ExtensionsContext = createContext<ExtensionsContextType>(
  {} as ExtensionsContextType,
);

export default ExtensionsContext;
