import { useState, useCallback } from "react";

const useFetchData = (transformData) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchRequest = useCallback(async () => {
    setIsLoading(true);
    setError("");

    let allPlanetArray = [];

    try {
      // All planets fetched at once as there are not many of them
      for (let i = 1; i < 7; i++) {
        const response = await fetch(
          `https://swapi.dev/api/planets/?page=${i}`
        );
        if (!response.ok) {
          throw new Error("Something went wrong!");
        }
        const { results } = await response.json();
        allPlanetArray.push(...results);
      }
      transformData(allPlanetArray);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, [transformData]);
  return {
    isLoading,
    error,
    fetchRequest,
  };
};

export default useFetchData;
