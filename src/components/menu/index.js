import { useState } from "react";
import styles from "./menu.module.css";
import {links} from "./links"

function Menu(){
   const [ativo, setAtivo] = useState(false);
   
   function ToggleMode(){
      setAtivo(!ativo);
      if (!ativo){
         document.body.style.overflow = "hidden"
      }else{
         document.body.style.overflow = "visible"
      }
   }

   return (
      <div className={ativo ? `${styles.menu__ativo}` : `${styles.container}`}>
         <div className={ativo ? `${styles.change} ${styles.botao__menu}` : `${styles.botao__menu}`} onClick={ToggleMode}>
            <div className={styles.bar1}></div>
            <div className={styles.bar2}></div>
            <div className={styles.bar3}></div>
         </div>
         <nav className={styles.nav__menu}>
            <ul className={styles.nav__lista}>
               {links.map((link)=>{
                  return <li className={styles.nav__item}><a href={link.url} key={link.id}>{link.texto}</a></li>
               })}
            </ul>
         </nav>
      </div>
   )
}

export default Menu