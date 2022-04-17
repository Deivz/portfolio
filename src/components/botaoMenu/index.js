import styles from "./botaoMenu.module.css"

function BotaoMenu({evento, ativo}){
   // const [ativo, setAtivo] = useState(false);
   
   // function ToggleMode(){
   //    setAtivo(!ativo);
   //    // if (!ativo){
   //    //    document.body.style.overflow = "hidden"
   //    // }else{
   //    //    document.body.style.overflow = "scroll"
   //    // }
   // }

   return(
      <div className={ativo ? `${styles.botao__menu} ${styles.change}` : `${styles.botao__menu}`} onClick={evento}>
         <div className={styles.bar1}></div>
         <div className={styles.bar2}></div>
         <div className={styles.bar3}></div>
      </div>
   )
}

export default BotaoMenu