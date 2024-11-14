import { useEffect, useRef } from "react";

/**
 * Custom React hook to implement infinite scrolling.
 *
 * This hook utilizes the Intersection Observer API to determine when the
 * observed element (typically the last item in a list) becomes visible 
 * in the viewport. When the element is visible and the loading state is false, 
 * it triggers the `setPage` function to increment the page number for data fetching.
 *
 * @param {boolean} loading - A boolean indicating whether data is currently being loaded.
 * @param {function} setPage - A function to update the current page number.
 * @returns {object} - A ref object to be attached to the element to be observed.
 */
export const useInfiniteScroll = (loading, setPage) => {
  const observerRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !loading) {
        setPage((prev) => prev + 1);
      }
    });

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => {
      if (observerRef.current) {
        observer.unobserve(observerRef.current);
      }
    };
  }, [loading, setPage]);

  return observerRef;
};