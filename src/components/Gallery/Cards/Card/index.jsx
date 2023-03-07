import open from '../../assets/open.png';
import fav from '../../assets/favorito.png';

export default function Card({ item, style }) {
    return (
        <li key={item.id} className={style.galeria__card}>
            <img src={item.imagem} alt={item.titulo} className={style.galeria__imagem} />
            <p className={style.galeria__descricao}>{item.titulo}</p>
            <div>
                <p>{item.creditos}</p>
                <span>
                    <img src={fav} alt="curtir" />
                    <img src={open} alt="expandir" />
                </span>
            </div>
        </li>
    );
}
