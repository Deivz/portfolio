import styles from "./home.module.css";
import fotoAutor from "../../assets/portfoto.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

export default function Home(){
    return(
      <section className={styles.secao__home} id="home">
         <div className={styles.home__container}>
            <main className={styles.main__conteudo}>
               <div className={styles.apresentacao}>
                  <h2>Oi, eu sou <strong>Davi</strong>,</h2>
               </div>
               <h3>e sou <strong>desenvolvedor full stack junior</strong>!</h3>
               <p>Graduado em engenharia mecânica pela UFBA, em transição de carreira, buscando a primeira oportunidade na área tech.</p>
               <div className={styles.icones}>
                  <span><a href="https://www.linkedin.com/in/carlos-davi-oliveira/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a></span>
                  <span><a href="https://github.com/Deivz" target="_blank" rel="noopener noreferrer"><FaGithub /></a></span>
                  <span><a href="https://www.instagram.com/deivzz/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a></span>
                  <span><a href="https://www.facebook.com/carlosd.oliveira" target="_blank" rel="noopener noreferrer"><FaFacebook /></a></span>
               </div>
            </main>
            <img src={fotoAutor} alt="Foto do autor da página" className={styles.foto}></img>
         </div>
      </section>
    )
}