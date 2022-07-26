import { useContext } from "react";
import { store }  from '../context/Provider';

export const useMyContext = () => {
  const globalState = useContext(store);

  return globalState;
};