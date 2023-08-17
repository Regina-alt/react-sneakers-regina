import React from "react";
import { useNavigate } from "react-router-dom";

/* context */
import AppContext from "../context";

/* components */
import Card from "../components/Card";
import { Info } from "../components/Info";

function Favorites({ onAddToFavorite }) {
  const { favorites } = React.useContext(AppContext);

  /* button back */
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("");
  };

  return (
    <div className="content p-40 ">
      {favorites.length == 0 ? (
        <div className="Info p-50">
          <Info
            title={"Закладок нет :("}
            description={"Вы ничего не добавляли в закладки"}
            image={"img/favorite-face.png"}
            action={handleClick}
          />
        </div>
      ) : (
        <>
          <div className="d-flex align-center justify-between mb-40">
            <h1>Мои закладки</h1>
          </div>
          <div className="d-flex flex-wrap">
            {favorites.map((item, index) => (
              <Card
                key={index}
                favorited={true}
                onFavorite={onAddToFavorite}
                {...item}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Favorites;
