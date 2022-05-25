import styles from "./menu.module.css";
import {links} from "./links"

export default function Menu(){
   return (
      <nav className={styles.nav__menu}>
         <ul className={styles.nav__lista}>
            {links.map((link)=>{
               return <li className={styles.nav__item} key={link.id}><a href={link.url}>{link.texto}</a></li>
            })}
         </ul>
      </nav>
   )
}