import React from 'react';
import styles from './FormRadio.module.scss';

const Radio = ({id, checked, changeFn, children}) => (
    <label className={styles.radio}>
        <input 
        id={id}
        type="radio"
        onChange={changeFn}
        checked={checked}
        />
        <div className={styles.radioButton}></div>
        {children}
    </label>
)



export default Radio;