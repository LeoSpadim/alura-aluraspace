import styles from './Gallery.module.scss';
import pictures from './pictures.json';

import Tags from '../Tags';
import Cards from './Cards';

export default function Gallery() {
    return (
        <section className={styles.galeria}>
            <h2>Navegue pela galeria:</h2>
            <Tags/>
            <Cards itens={pictures} style={styles}/>
        </section>
    );
}
