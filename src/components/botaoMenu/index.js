import styles from "./botaoMenu.module.css"

function BotaoMenu({evento, ativo}){
   return(
      <section className={styles.menu}>
         <div className={styles.botao__menu}>
            <div className={ativo ? `${styles.change}` : ``} onClick={evento}>
               <div className={styles.bar1}></div>
               <div className={styles.bar2}></div>
               <div className={styles.bar3}></div>
            </div>
         </div>
      </section>
   )
}

export default BotaoMenu