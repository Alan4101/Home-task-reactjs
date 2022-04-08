import React, { useState } from "react";
import styles from "./TodoForm.module.css";
import { useHttp } from './../../hooks/useHttp';

const TodoForm = ({}) => {
  const[message, setMesage] = useState(false);
  const [value, setValue] = useState('');

  const submitHandler = (event) => {
    event.preventDefault();

    if (value.trim()) {
      const item = {
        id: new Date.now(),
        text: value,
        date: new Date.now()
      }
      
      console.log(value)
      
      setValue("");
    } else {
      console.log('empty')
    }
  };
  return (
    <form className={styles.formTodo} onSubmit={submitHandler}>
      <div className={styles.formField}>
        <label htmlFor="input" className={styles.formLabel}>
          Item
        </label>
        <input
          id="input"
          onChange={(e) => setValue(e.target.value)}
          value={value.text}
          className={styles.formInput}
          type="text"
        />
      </div>
      <div className={styles.formField}>
        <button className={styles.btnForm}>Add</button>
      </div>
    </form>
  );
};
export default TodoForm;
