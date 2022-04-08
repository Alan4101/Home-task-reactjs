import React from "react";
import styles from './Items.module.css';

const Items = ({data}) => {
  
  return(
    <ul className={styles.itemWrapper}>
      {
        data.map(el=>(
          <li key={el.id} className={styles.item}>{el.text}</li>
        ))
      }
    </ul>
  )
}
export default Items;