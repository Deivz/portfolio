import {useEffect, useState} from "react";
import Topo from "./components/topo";
import Home from "./components/home";
import Sobre from "./components/sobre"

function App() {

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

  return (
    <div>
      <Topo acao={ativaCor}/>
      <Home />
      <Sobre />
    </div>
  );
}

export default App;
