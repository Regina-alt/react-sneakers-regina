import React from "react";

import Card from "../components/Card";
import { Banner } from "../components/Banner";

function Home({
  items,
  searchValue,
  setSearchValue,
  onChangeSearchInput,
  onAddToCart,
  onAddFavorite,
  isLoading,
}) {
  const renderItems = () => {
    const filtredItems = items.filter((item) =>
      item.title.toLowerCase().includes(searchValue.toLowerCase())
    );
    return (isLoading ? [...Array(10)] : filtredItems).map((item, index) => (
      <Card
        key={index}
        onFavorite={(obj) => onAddFavorite(obj)}
        onPlus={(obj) => onAddToCart(obj)}
        loading={isLoading}
        {...item}
      />
    ));
  };

  return (
    <>
      <div className="content p-40 ">
        <Banner />
        <div className="d-flex align-center justify-between mb-40">
          <h1>
            {searchValue
              ? `Поиск по запросу: "${searchValue}"`
              : `Все кроссовки`}
          </h1>
          <div className="search-block">
            <img src="img/search.png" alt="Search" />
            {searchValue && (
              <img
                onClick={() => setSearchValue("")}
                className="clear cu-p"
                src="img/btn-remove.svg"
                alt="Clear"
              />
            )}
            <input
              placeholder="Поиск...."
              onChange={onChangeSearchInput}
              value={searchValue}
            />
          </div>
        </div>

        <div className="d-flex flex-wrap">{renderItems()}</div>
      </div>
    </>
  );
}

export default Home;
