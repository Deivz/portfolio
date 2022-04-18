import styles from "./topo.module.css";
import logo from "../../assets/dvzlogo.png"

function Topo({acao}) {

   return (
      <header className={acao ? `${styles.topo__colorido}` : ``}>
         <div className={styles.topo__container} id="topo">
            <div>
               <h1><a href="#"><img src={logo} alt="Logotipo do autor da página" className={styles.logo}></img></a></h1>
            </div> 
         </div>
      </header>
   )
}

export default Topo