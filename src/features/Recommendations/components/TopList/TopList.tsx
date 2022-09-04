import React from "react";
import { MockMainPageData } from "@services/mockService";
import TopItem from "../TopItem/TopItem";
import styles from "./TopList.module.scss";

interface TopListProps {
  title: string;
  topList: MockMainPageData[];
}

const TopList = ({title, topList }: TopListProps) => {
  return (
    <div className={`${styles.topList} _container`}>
      <h2 className={styles.topList__title}>{title}</h2>
      <ul className={styles.topList__list}>
        {topList.length > 0 && topList.map((item, index) => {
          return <TopItem key={item.title} topItem={item} index={index + 1}/>
        }
      )}
      </ul>
    </div>
  )
}

export default TopList;