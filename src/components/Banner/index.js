import React from "react";

/* style */
import styles from "./Banner.module.scss";

export const Banner = () => {
  return (
    <div className={styles.banner}>
      <div className="d-flex align-center justify-between">
        <div className={styles.bannerText}>
          <img src="img/banner-logo.png" alt="" />
          <h1>
          <span>Stan Smith</span>, Forever!
          </h1>
          <button>
            Купить
          </button>
        </div>
        <img src="img/banner-img.png" alt="" />
      </div>
    </div>
  );
};
