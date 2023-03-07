import React from 'react'
import styles from './Tags.module.scss';

import pictures from '../Gallery/pictures.json';

export default function Tags({tags, filtrar, set}) {
    return (
        <div className={styles.tags}>
            <p>Filtre por tags:</p>
            <ul className={styles.tags__lista}>
                {tags.map((tag) => {
                    return(
                        <li key={tag} onClick={() => filtrar(tag)}>{tag}</li>
                    );
                })}
                <li onClick={() => set(pictures)}>Todas</li>
            </ul>
        </div>
    );
}
