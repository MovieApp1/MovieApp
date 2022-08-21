import React from "react";
import styles from './BurgerButton.module.scss'

export const BurgerButton = () => {
  return (
    <button className={styles.burgerButton}>
      <span className={styles.burgerButton__dash}></span>
    </button>
  )
}