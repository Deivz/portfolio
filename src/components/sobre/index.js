import styles from "./sobre.module.css"
import {FaTools} from "react-icons/fa";

export default function Sobre(){
    return(
      <section className={styles.secao__sobre} id="sobre">
        <div className={styles.sobre__container}>
          <div className={styles.sobre__texto}>
              <h2><FaTools style={{paddingBottom: 6}}/> Um pouco sobre mim</h2>
              <h3><span></span>Engenheiro mecânico {"&"} desenvolvedor full stack</h3>
              <p>Audodidata, polímata e apaixonado por tecnologia e em descobrir como elas funcionam, desde criança desmontava coisas pra entender como eram feitas.
                  Aos 12 anos tive acesso ao meu primeiro computador, e um mundo novo então se abriu. Aos 14 anos comecei a criar páginas na web
                  através de sites como HPG e Geocities. Fascinado com tudo aquilo, decidi ingressar em um curso de graduação tecnológica e me aperfeiçoar
                  ainda mais, comecei então a estudar Sistemas para Internet na Unifacs, onde tive meu primeiro contato com programação. E foi amor a primeira vista!
                  Apesar de amar o que fazia, decidi dar uma pausa com o curso, mas não com os estudos. Continuei aprendendo por conta própria e ingressei em uma nova
                  graduação, engenharia mecânica na UFBA. Entretanto, colocando matérias de programação na grade curricular sempre que possível.
                  Após concluir minha graduação em engenharia, decidi retornar de uma vez a área que sempre fez meu coração bater mais forte: desenvolvimento de sistemas
                  (seja para a web ou não). Me aperfeiçoando cada dia mais, estou sempre em busca de aprender novas teconologias e masterizar as que já utilizo!
              </p>
          </div>
          <div className={styles.sobre__imagens}></div>
        </div>  
      </section>
    )
}