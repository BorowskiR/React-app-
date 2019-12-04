import React from 'react';
import Button from '../Button/Button';
import styles from './Header.module.scss';
import HeaderNavigation from './HeaderNavigation';
import logoImage from '../../assets/images/logo.svg'

const Header = ({openModalFn}) => (
    <header className={styles.wrapper}>
        <img className={styles.logo} src={logoImage} alt="Fav Note logo"/>
        <HeaderNavigation/>
        <Button onClick={openModalFn} secondary>new item</Button>
    </header>
)

export default Header;