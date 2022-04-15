import styles from "./topo.module.css";
import Menu from "../menu/Menu";
import fotoAutor from "../../assets/portfoto.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

function Topo() {
   return (
      <header className={styles.topo}>
         <div className={styles.topo__container}>
            <h1></h1>
            <Menu />
         </div>
         <section className={styles.secao__principal}>
            <main className={styles.main__conteudo}>
               <h2>Oi, eu sou <strong>Davi</strong>,</h2>
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
         </section>
      </header>
   )
}

export default Topo