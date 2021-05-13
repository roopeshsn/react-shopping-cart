import { useState, useEffect } from "react";

const useFetch = (URL) => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    const abortCont = new AbortController();
    const fetchMeals = async () => {
      setIsLoading(true);
      const res = await fetch(URL, { signal: abortCont.signal });
      if (!res.ok) {
        throw new Error("Something went wrong!");
      }
      const resData = await res.json();
      const loadedItems = [];
      for (const key in resData) {
        loadedItems.push({
          id: key,
          name: resData[key].name,
          category: resData[key].category,
          priceCents: resData[key].priceCents,
          imageColor: resData[key].imageColor,
        });
      }
      setItems(loadedItems);
      setIsLoading(false);
    };

    fetchMeals().catch((error) => {
      setIsLoading(false);
      setError(error.message);
    });
    return () => abortCont.abort();
  }, [URL]);
  return { items, isLoading, error };
};

export default useFetch;
