import React from 'react';
import styles from './FormRadio.module.scss';

const Radio = ({id, checked, changeFn, children}) => (
    <label for={id} className={styles.radio}>
        <input 
        type="radio"
        onChange={changeFn}
        checked={checked}
        />
        <div className={styles.radioButton}></div>
        {children}
    </label>
)



export default Radio;