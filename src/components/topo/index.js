import styles from "./topo.module.css";
import Menu from "../menu";
import logo from "../../assets/dvzlogo.png"

function Topo() {
   return (
      <header>
         <div className={styles.topo__container} id="topo">
            <div className={styles.topo}>
               <h1><img src={logo} alt="Logotipo do autor da página" className={styles.logo}></img></h1>
               <Menu />
            </div> 
         </div>
      </header>
   )
}

export default Topo