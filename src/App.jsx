import React, { useMemo, useState } from "react";
import CardItemList from "./components/CardItemList";
import { useFetchItems, useInfiniteScroll } from "./hooks";

/**
 * The main App component.
 *
 * It manages the current page and fetching of the items.
 * It uses the `useFetchItems` hook to fetch the items and the `useInfiniteScroll`
 * hook to handle the infinite scrolling.
 *
 * It renders the `CardItemList` component with the state object.
 *
 * The state object contains the current page, items and the loading flag.
 *
 * @returns {JSX.Element} The rendered App component.
 */
const App = () => {
  const [page, setPage] = useState(1);
  const { items, loading } = useFetchItems(page);
  useInfiniteScroll(loading, setPage);

  const state = useMemo(
    () => ({
      items,
      page,
      loading,
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
