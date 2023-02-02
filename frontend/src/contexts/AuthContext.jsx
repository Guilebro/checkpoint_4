import PropTypes from "prop-types";
import { createContext, useContext, useState } from "react";
import axios from "axios";

const authContext = createContext({});

export function AuthProvider({ children }) {
  const { Provider } = authContext;
  const [gameList, setGameList] = useState([]);
  const [bossList, setBossList] = useState([]);

  const getGameList = () => {
    const url = "http://localhost:8000/api/game";
    axios.get(url).then((response) => setGameList(response.data));
  };

  const getBossList = () => {
    const url = "http://localhost:8000/api/boss";
    axios.get(url).then((response) => setBossList(response.data));
  };

  return (
    <Provider value={{ gameList, getGameList, getBossList, bossList }}>
      {children}
    </Provider>
  );
}

AuthProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export const useAuth = () => useContext(authContext);
