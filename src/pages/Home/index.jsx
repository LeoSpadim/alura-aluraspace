import styles from './Home.module.scss';

import banner from './banner.png'

import Header from "../../components/Header";
import Menu from "../../components/Menu";
import Footer from '../../components/Footer';

export default function Home(){
    return(
        <>
        <Header/>
        <main>
            <section className={styles.principal}>
                <Menu/>
                <div className={styles.principal__imagem}>
                    <h1>A galeria mais completa do espaço!</h1>
                    <img src={banner} alt="" />
                </div>
            </section>
        </main>
        <Footer/>
        </>
    );
}