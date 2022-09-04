import React from "react";
import styles from './TopItem.module.scss';
import { MockMainPageData } from "@services/mockService";

interface TopItemProps {
  index: number;
  topItem: MockMainPageData;
}

const TopItem = ({topItem, index}: TopItemProps) => {
  return (
    <li className={styles.topItem}>
      <div className={styles.topItem__leftBlock}>
        <span className={styles.topItem__itemIndex}>{index}</span>
        <div className={styles.topItem__itemDetails}>
          <h3 className={styles.topItem__itemTitle}>{topItem.title}</h3>
          <p className={styles.topItem__itemYear}>{topItem.year }</p>
        </div>
      </div>
      <div className={styles.topItem__rightBlock}>
        <p className={styles.topItem__itemScore}>{topItem.score }</p>
      </div>
    </li>
)
}

export default TopItem;