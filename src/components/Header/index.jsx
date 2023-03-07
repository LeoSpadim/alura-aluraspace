import styles from './Header.module.scss';

import { ReactComponent as Logo } from './assets/logo.svg';
import search from './assets/search.png';

export default function Header() {
    return (
        <header className={styles.cabecalho}>
            <Logo />
            <div className={styles.cabecalho__container}>
                <input className={styles.cabecalho__input} type="text" placeholder="O que você procura?" />
                <img src={search} alt="ícone de busca" />
            </div>
        </header>
    );
}