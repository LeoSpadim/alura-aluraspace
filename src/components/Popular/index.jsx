import styles from './Popular.module.scss';
import popularImgs from './popular-pictures.json';

export default function Popular() {
    return (
        <aside className={styles.populares}>
            <h2>Populares:</h2>
            <ul className={styles.populares__imagens}>
                {popularImgs.map((img) => {
                    return(
                        <li key={img.id}>
                            <img src={img.path} alt={img.alt} />
                        </li>
                    );
                })}
            </ul>
            <button>Ver mais</button>
        </aside>
    );
}
