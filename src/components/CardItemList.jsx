import React from "react";

const staticTitles = {
  mainTitle: "Бесконечная прокрутка в React",
  loadingMessage: "Загрузка...",
  noDataMessage: "Данных нет",
};

/**
 * Component for rendering a list of items in cards with infinite scrolling.
 *
 * @prop {Object} state - state object with items and loading properties.
 * @prop {Array.<Object>} state.items - array of items to render.
 * @prop {boolean} state.loading - whether the component is currently loading.
 *
 * @returns {ReactElement} - element with list of cards and loading message.
 */
const CardItemList = ({ state: { items, loading } }) => {
  return (
    <>
      <h1>{staticTitles.mainTitle}</h1>
      <ul>
        {items?.length > 0
          ? items.map((item) => (
              <li key={`${item.id}-${item.name.first}-${item.name.last}`}>
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
