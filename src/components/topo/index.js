import styles from "./topo.module.css";
import logo from "../../assets/dvzlogo.png"

function Topo({acao}) {

   return (
      <header>
         <div className={acao ? `${styles.topo__container} ${styles.topo__colorido}` : `${styles.topo__container}`} id="topo">
            <div className={styles.topo}>
               <h1><a href="#"><img src={logo} alt="Logotipo do autor da página" className={styles.logo}></img></a></h1>
            </div> 
         </div>
      </header>
   )
}

export default Topo