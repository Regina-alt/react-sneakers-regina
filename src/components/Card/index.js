import React from "react";

/* context */
import AppContext from "../../context";

/* style */
import styles from "./Card.module.scss";

/* loader-skeleton */
import ContentLoader from "react-content-loader";

function Card({
  id,
  title,
  imageUrl,
  price,
  onFavorite,
  onPlus,
  favorited = false,
  added = false,
  loading = false,
}) {
  const { isItemsAdded } = React.useContext(AppContext);
  const [isFavorited, SetIsFavorite] = React.useState(favorited);
  const obj = { id, parentId: id, title, imageUrl, price, added };

  const onClickPlus = () => {
    onPlus(obj);
  };

  const onClickFavorite = () => {
    onFavorite(obj);
    SetIsFavorite(!isFavorited);
  };

  return (
    <div className={styles.card}>
      {loading ? (
        <ContentLoader
          speed={2}
          width={200}
          height={210}
          viewBox="0 0 200 210"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <rect x="15" y="10" rx="10" ry="10" width="150" height="90" />
          <rect x="15" y="111" rx="5" ry="5" width="150" height="15" />
          <rect x="15" y="134" rx="5" ry="5" width="100" height="15" />
          <rect x="15" y="180" rx="5" ry="5" width="80" height="25" />
          <rect x="135" y="175" rx="10" ry="10" width="32" height="32" />
        </ContentLoader>
      ) : (
        <>
          {onFavorite && (
            <div className={styles.favorite} onClick={onClickFavorite}>
              <img
                src={
                  isFavorited
                    ? "img/heart-liked.svg"
                    : "img/heart-unliked.svg"
                }
                alt="Unliked"
              />
            </div>
          )}

          <img
            width={133}
            height={112}
            src={imageUrl}
            alt="Sneakers"
            className="ml-20"
          />
          <h5>{title}</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column ">
              <span>Цена: </span>
              <b>{price} руб.</b>
            </div>

            {onPlus && (
              <img
                className={styles.plus}
                onClick={onClickPlus}
                src={
                  isItemsAdded(id)
                    ? "img/btm-checked.svg"
                    : "img/btn-plus.svg"
                }
                alt="plus"
              />
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default Card;
