import styles from "./topo.module.css";

function Topo(){
    return(
        <header className={styles.topo}>
            <div className={styles.topo__container}>
                <h1></h1>
                <nav className={styles.nav}>
                    <ul className={styles.nav__lista}>
                        <li className={styles.nav__item}>Home</li>
                        <li className={styles.nav__item}>Sobre</li>
                        <li className={styles.nav__item}>Competências</li>
                        <li className={styles.nav__item}>Experiências</li>
                        <li className={styles.nav__item}>Portfolio</li>
                        <li className={styles.nav__item}>Contato</li>
                    </ul>
                </nav>
            </div>
            <section className={styles.secao__principal}>
                <main className={styles.main__conteudo}>
                    <h2>Oi, eu sou o <strong>Davi</strong>,</h2>
                    <h3>e sou desenvolvedor front-end junior!</h3>
                    <p>Sou engenheiro mecânico em transição de carreira em busca de minha primeira oportunidade.</p>
                </main>
                <div>Minha foto aqui</div>
            </section>
            
        </header>
    )
}

export default Topo