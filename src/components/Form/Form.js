import React from "react";
import styles from "./Form.module.scss";
import Input from "../Input/Input";

const Form = ({ submitFn }) => (
  <div className={styles.wrapper}>
    <h2>Add new twitter account</h2>
    <form 
    autoComplete="off"
    className={styles.form} 
    onSubmit={submitFn}>
        <Input 
            name="name"
            label="Name"
            maxLength={30}
            required="required"
        />
        <Input 
            name="link"
            label="Twitter link"
            required="required"
        />
        <Input 
            name="image"
            label="Image"    
        />
          <Input 
            name="description"
            label="Description"
            tag="textarea"
            required="required"
        />
      <button className={styles.button} type="submit">
        add new item
      </button>
    </form>
  </div>
);

export default Form;
