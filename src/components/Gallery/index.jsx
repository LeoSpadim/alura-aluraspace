import styles from './Gallery.module.scss';
import pictures from './pictures.json';

import Tags from '../Tags';
import Cards from './Cards';

import { useState } from 'react';

export default function Gallery() {
    const [itens, setItens] = useState(pictures)
    const tag = [...new Set(pictures.map((picture) => picture.tag))];

    const filtrarFotos = (tag) => {
        const fotosFiltradas = pictures.filter((picture) => {
            return (picture.tag === tag);
        });

        setItens(fotosFiltradas);
    }

    return (
        <section className={styles.galeria}>
            <h2>Navegue pela galeria:</h2>
            <Tags tags={tag} filtrar={filtrarFotos} set={setItens}/>
            <Cards itens={itens} style={styles}/>
        </section>
    );
}
