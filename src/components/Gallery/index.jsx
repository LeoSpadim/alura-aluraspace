import styles from './Gallery.module.scss';

import imgs from './pictures.json';
import open from './assets/open.png';
import fav from './assets/favorito.png';

import Tags from '../Tags';

export default function Gallery() {
    return (
        <section className={styles.galeria}>
            <h2>Navegue pela galeria:</h2>
            <Tags/>
            <ul className={styles.galeria__cards}>
                {imgs.map((foto) => {
                    return(
                        <li key={foto.id} className={styles.galeria__card}>
                            <img src={foto.imagem} alt={foto.titulo} className={styles.galeria__imagem}/>
                            <p className={styles.galeria__descricao}>{foto.titulo}</p>
                            <div>
                                <p>{foto.creditos}</p>
                                <span>
                                    <img src={fav} alt="curtir" />
                                    <img src={open} alt="expandir" />
                                </span>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </section>
    );
}
