import styles from "./menu.module.css";
import {links} from "./links"

function Menu({ativo}){
   return (
      <div className={styles.navegacao}>
         <div className={ativo ? `${styles.container} ${styles.menu__ativo}` : `${styles.container}`}>
            <nav className={styles.nav__menu}>
               <ul className={styles.nav__lista}>
                  {links.map((link)=>{
                     return <li className={styles.nav__item}><a href={link.url} key={link.id}>{link.texto}</a></li>
                  })}
               </ul>
            </nav>
         </div>
      </div>
   )
}

export default Menu