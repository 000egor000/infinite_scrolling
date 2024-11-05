import { useEffect } from "react";

/**
 * Adds an event listener to the window that listens for a scroll event. When
 * the user reaches the bottom of the page, it calls the setPage function to
 * fetch the next page of data. The event listener is cleaned up with
 * useEffect's cleanup function.
 *
 * @param {boolean} loading - Whether the data is currently loading.
 * @param {function} setPage - Function to call when the user reaches the
 * bottom of the page. Should update the page state.
 */
export const useInfiniteScroll = (loading, setPage) => {
  useEffect(() => {
    const handleScroll = () => {
      const isBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight;

      if (isBottom && !loading) {
        setPage((prev) => prev + 1);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [loading, setPage]);
};
