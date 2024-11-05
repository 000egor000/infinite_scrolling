// Хук для получения данных для карточки

import React, { useState, useEffect } from "react";
  /**
   * @function useFetchItems
   * @description React hook for fetching random users from API
   * @param {number} page - Page number to fetch
   * @returns {object} - An object with two properties: `items` and `loading`
   * @property {array} items - An array of user objects
   * @property {boolean} loading - A boolean indicating if the data is being fetched
   */
export const useFetchItems = (page) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    /**
     * Fetches a list of random users from the API and updates the local state
     * @async
     * @function
     * @param {number} page - Page number to fetch
     * @returns {Promise<void>}
     */
    const fetchItems = async () => {
      setLoading(true);

      try {
        const response = await fetch(
          `https://randomuser.me/api/?results=10&page=${page}`
        );
        const data = await response.json();

        setItems((prev) => [...prev, ...data.results]);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchItems();
  }, [page]);

  return { items, loading };
};
