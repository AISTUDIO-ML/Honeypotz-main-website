import { createContext } from "react";

type ContextType = {
  active: string;
  setActive: (active: string) => void;
};

const Context = createContext<ContextType | undefined>(undefined);

export default Context;
