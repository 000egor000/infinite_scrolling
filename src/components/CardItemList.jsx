import React from "react";

const staticTitles = {
  mainTitle: "Бесконечная прокрутка в React",
  loadingMessage: "Загрузка...",
  noDataMessage: "Данных нет",
};

/**
 * CardItemList component renders a list of items with infinite scrolling support.
 *
 * It displays a main title, a list of user items, and status messages based on the loading state.
 * Each item in the list includes a user's image, full name, and email address.
 * If items are available, it maps over them and renders a list item for each.
 * If no items are available and not loading, it shows a "No Data" message.
 * When loading, it shows a loading message.
 *
 * @param {object} state - The state object containing items, loading status, and observer reference.
 * @param {array} state.items - An array of user objects to display.
 * @param {boolean} state.loading - A boolean indicating if data is currently being fetched.
 * @param {object} state.observerRef - A ref object for the last list item to enable infinite scrolling.
 * @returns {JSX.Element} The rendered list of items with status messages.
 */
const CardItemList = ({ state: { items, loading, observerRef } }) => {
  return (
    <>
      <h1>{staticTitles.mainTitle}</h1>
      <ul>
        {items?.length > 0
          ? items.map((item) => (
              <li
                key={`${item.id}-${item.name.first}-${item.name.last}`}
                ref={observerRef}
              >
                <img
                  src={item.picture.large}
                  alt={`${item.name.first} ${item.name.last}`}
                />
                <h2>
                  {item.name.first} {item.name.last}
                </h2>
                <p>{item.email}</p>
              </li>
            ))
          : !loading && <h4>{staticTitles.noDataMessage}</h4>}
      </ul>
      {loading && <h4>{staticTitles.loadingMessage}</h4>}
    </>
  );
};

export default CardItemList;
