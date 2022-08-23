import React from "react";
import styles from './Slider.module.scss';
import { Icon } from "../../../../components/Icon";

const Slider = () => {
  const blockName = 'slider';

  return (
    <div className={styles.slider}>
      <div className={styles.slider__inner}>
        <div className={styles.slider__slidesWrapper}>
          <button className={`${styles.slider__button} ${styles.slider__button_prev}`}>
            <Icon width={'2.5em'} height={'2.5em'} id={'prev'} block={blockName} stroke = '#F1F1F1'></Icon>
          </button>
          <button className={`${styles.slider__button} ${styles.slider__button_next}`}>
            <Icon width={'2.5em'} height={'2.5em'} id={'prev'} block={blockName} stroke = '#F1F1F1'></Icon>
          </button>
          <picture className={styles.slider__imgContainer}>
            <img className={styles.slider__img} src="https://www.hdclub.ua/files/film_poster/big/bigi5462297858f1f.jpg" alt="" />
          </picture>
        </div>
        <div className={`${styles.slider__info} _container`}>
          <div className={styles.slider__infoTextWrapper}>
            <p className={`${styles.slider__filmTitle} _subtitle`}>Heat</p>
            <p className={`${styles.slider__filmDirector} _textRegular`}>Michael Mann</p>
          </div>
          <div className={styles.slider__controls}>
            <p className={`${styles.slider__filmDuration} _textRegular`}>2hr 50 min</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Slider;