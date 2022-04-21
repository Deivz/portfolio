import styles from "./topo.module.css";
import cssAtivo from "../menu/menu.module.css"
import logo from "../../assets/dvzlogo.png"
import Menu from "../menu";
import BotaoMenu from "../botaoMenu";
import {useEffect, useState} from "react";

export default function Topo() {

   const [ativaCor, setAtivaCor] = useState(false);

   useEffect(()=>{
      function posicaoScroll(){
         if(window.scrollY > 20){
            setAtivaCor(true);
         }else{
            setAtivaCor(false);
         }
      }
      window.addEventListener('scroll', posicaoScroll)
   }, []);

   const [ativo, setAtivo] = useState(false);
   
   function ToggleMode(){
      setAtivo(!ativo);
      // if (!ativo){
      //    document.body.style.overflow = "hidden"
      // }else{
      //    document.body.style.overflow = "scroll"
      // }
   }

   return (
      <header className={ativaCor ? `${styles.topo__colorido} ${styles.header}` : `${styles.header}`}>
         <div className={ativo ? `${styles.topo__container} ${cssAtivo.menu__ativo}` : `${styles.topo__container}`} id="topo">
            <div className={styles.container__logo}>
               <h1><a href="#"><img src={logo} alt="Logotipo do autor da página" className={styles.logo}></img></a></h1>
            </div>
            <BotaoMenu  ativo={ativo} evento={ToggleMode}/>
            <Menu />
         </div>
      </header>
   )
}