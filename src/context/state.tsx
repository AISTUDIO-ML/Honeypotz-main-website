import { useState } from "react";
import Context from "./context";

interface StateProps {
  children: React.ReactNode;
}

const State: React.FC<StateProps> = (props) => {
  const { children } = props;
  const path = window.location.href.split("#")[1];
  const [active, setActive] = useState(path);
  return (
    <Context.Provider value={{ active, setActive }}>
      {children}
    </Context.Provider>
  );
};

export default State;
