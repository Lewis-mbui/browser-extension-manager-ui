import { useEffect, useReducer, type ReactNode } from "react";
import type Extension from "../entities/Extension";
import ExtensionsContext from "../contexts/ExtensionsContext";

interface InitializeExtensions {
  type: "init";
  extensions: Extension[];
}

interface ToggleExtension {
  type: "toggle";
  extensionId: number;
}

interface RemoveExtension {
  type: "remove";
  extensionId: number;
}

export type ExtensionAction =
  | ToggleExtension
  | RemoveExtension
  | InitializeExtensions;

const extensionsReducer = (state: Extension[], action: ExtensionAction) => {
  switch (action.type) {
    case "toggle":
      return state.map((e) =>
        action.extensionId === e.id ? { ...e, isActive: !e.isActive } : e,
      );
    case "remove":
      return state.filter((e) => e.id !== action.extensionId);
    case "init":
      return action.extensions;
    default:
      return state;
  }
};

interface Props {
  children: ReactNode;
}

const ExtensionsProvider = ({ children }: Props) => {
  const [extensions, dispatch] = useReducer(extensionsReducer, []);

  useEffect(() => {
    fetch("/src/data/data.json")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "init", extensions: data }));
  }, []);
  return (
    <ExtensionsContext.Provider value={{ dispatch, extensions }}>
      {children}
    </ExtensionsContext.Provider>
  );
};

export default ExtensionsProvider;
