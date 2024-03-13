import { createContext, useContext } from "react";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
const CitiesContext = createContext();
const BASE_URL = "http://localhost:8000";

CitiesProvider.propTypes = {
  children: PropTypes.object,
};
function CitiesProvider({ children }) {
  const [cities, setCities] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [currentCity, setCurrentCity] = useState({});
  console.log(error);

  useEffect(function () {
    async function getCities() {
      try {
        setError("");
        setIsLoading(true);
        const res = await fetch(`${BASE_URL}/cities`);
        const data = await res.json();
        if (!res.ok) throw new Error("City Not found");
        setCities(data);
        setError("");
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }

    getCities();
  }, []);

  async function getCity(id) {
    try {
      setError("");
      setIsLoading(true);
      const res = await fetch(`${BASE_URL}/cities/${id}`);
      const data = await res.json();
      if (!res.ok) throw new Error("City Not found");
      setCurrentCity(data);
      setError("");
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <CitiesContext.Provider value={{ cities, isLoading, currentCity, getCity }}>
      {children}
    </CitiesContext.Provider>
  );
}

function useCities() {
  const context = useContext(CitiesContext);

  if (context === undefined)
    throw new Error(
      "Value of context will be undefined if it is consumed outside of provider"
    );

  return context;
}
// eslint-disable-next-line react-refresh/only-export-components
export { CitiesProvider, useCities };
