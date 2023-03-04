import React from 'react';
import styles from './Footer.module.scss';

import facebook from "./assets/facebook.svg";
import twitter from "./assets/twitter.svg";
import instagram from "./assets/instagram.svg";

export default function Footer() {
    return (
        <footer className={styles.rodape}>
            <div className={styles.rodape__icones}>
                <a href="https://www.facebook.com/AluraCursosOnline/" target="_blank" rel="noreferrer">
                    <img src={facebook} alt="" />
                </a>
                <a href="https://twitter.com/aluraonline?lang=en" target="_blank" rel="noreferrer">
                    <img src={twitter} alt="" />
                </a>
                <a href="https://www.instagram.com/aluraonline/?hl=en" target="_blank" rel="noreferrer">
                    <img src={instagram} alt="" />
                </a>
            </div>
            <p>Desenvolvido por Leo @ Alura</p>
        </footer>
    );
}
