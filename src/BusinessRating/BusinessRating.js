import React from "react";
import Rating from "react-rating";

import styles from "./BusinessRating.module.css";

export function BusinessRating() {
  return (
    <div className={styles.rating}>
      <Rating
        emptySymbol="far fa-star"
        fullSymbol="fas fa-star"
        fractions={2}
        readonly
        initialRating={3}
      />
      <p>724 reviews</p>
    </div>
  );
}
