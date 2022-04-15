import { useState } from "react";
import styles from "./menu.module.css";

function Menu(){
   const [ativo, setAtivo] = useState(false);
   function ToggleMode(){
      setAtivo(!ativo);
   }

   return (
      <div className={ativo ? `${styles.menu__ativo}` : `${styles.container}`} onClick={ToggleMode}>
         <div className={ativo ? `${styles.change} ${styles.botao__menu}` : `${styles.botao__menu}`}>
            <div className={styles.bar1}></div>
            <div className={styles.bar2}></div>
            <div className={styles.bar3}></div>
         </div>
         <nav className={styles.nav__menu}>
            <ul className={styles.nav__lista}>
               <li className={styles.nav__item}><a href="#">Home</a></li>
               <li className={styles.nav__item}><a href="#">Sobre</a></li>
               <li className={styles.nav__item}><a href="#">Competências</a></li>
               <li className={styles.nav__item}><a href="#">Experiências</a></li>
               <li className={styles.nav__item}><a href="#">Portfolio</a></li>
               <li className={styles.nav__item}><a href="#">Contato</a></li>
            </ul>
         </nav>
      </div>
   )
}

export default Menu