import React, { useState } from "react";
import styles from "./TodoForm.module.css";

const TodoForm = ({addTask}) => {
  const [value, setValue] = useState('');

  const handleChange = (event) =>{
    setValue(event.currentTarget.value);
  }

  const hadleSybmit = (event) => {
    event.preventDefault();
    addTask(value);
    setValue('');
  };
  return (
    <form className={styles.formTodo} onSubmit={hadleSybmit}>
      <div className={styles.formField}>
        <label htmlFor="input" className={styles.formLabel}>
          Item
        </label>
        <input
          id="input"
          onChange={handleChange}
          value={value}
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
