import { createContext } from "react";
import RootStore from "../store/RootStore";

export const store = createContext();

const { Provider } = store;

export const AppContext = ({ children }) => {
  return <Provider value={new RootStore()}>{children}</Provider>;
};
