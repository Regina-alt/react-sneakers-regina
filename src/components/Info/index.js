import React from "react";

import style from "./Info.module.scss";

export const Info = ({ image, title, description, action }) => {
  return (
    <div className={style.cartEmpty}>
      <img className="mb-20" src={image} alt="CartEmpty" />
      <h2>{title}</h2>
      <p>{description}</p>
      <button className={style.greenButton} onClick={action}>
        <img src="img/arrow.svg" alt="Arrow" /> Вернуться назад
      </button>
    </div>
  );
};
