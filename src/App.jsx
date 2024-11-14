import React, { useMemo, useState } from "react";
import CardItemList from "./components/CardItemList";
import { useFetchItems, useInfiniteScroll } from "./hooks";

/**
 * Main application component.
 *
 * @returns {ReactElement} - The main application component
 *
 * The component renders a list of items in cards with infinite scrolling.
 * It uses the `useFetchItems` and `useInfiniteScroll` hooks to fetch data
 * and handle the infinite scroll.
 *
 * The component also uses the `useMemo` hook to memoize the component's state,
 * which is then passed to the `CardItemList` component.
 */
const App = () => {
  const [page, setPage] = useState(1);
  const { items, loading } = useFetchItems(page);
  const observerRef = useInfiniteScroll(loading, setPage);

  const state = useMemo(
    () => ({
      items,
      page,
      loading,
      observerRef,
    }),
    [items, page, loading]
  );

  return (
    <div className="App">
      <CardItemList state={state} />
    </div>
  );
};

export default App;
