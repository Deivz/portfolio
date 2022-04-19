import styles from "./sobre.module.css"
import {FaUserGraduate} from "react-icons/fa";

export default function Sobre(){
    return(
      <section className={styles.sobre} id="sobre">
        <h2 className={styles.titulo}><FaUserGraduate style={{paddingBottom: 6}}/> Um pouco sobre mim</h2>
        <div className={styles.sobre__container}>
          <div className={styles.sobre__texto}>
              <h3><span></span>Engenheiro mecânico {"&"} desenvolvedor full stack</h3>
              <p>Audodidata, polímata e apaixonado por tecnologia e em descobrir como elas funcionam, desde criança desmontava coisas pra entender como eram feitas.
                Aos 14 anos comecei a criar páginas na web através do HPG e Geocities. Para me aperfeiçoar, iniciei a graduação em Sistemas para Internet,
                  na Unifacs, onde fui apresentado ao mundo da programação. E foi amor a primeira vista! Apesar de amar o que fazia, decidi mudar de curso, mas continuei
                  estudando por conta própria. Ingressei na graduação de engenharia mecânica, na UFBA e sempre que possível incluía matérias de programação na grade curricular.
                  Após me formar, decidi retornar de uma vez a área que sempre fez meu coração bater mais forte. Me aperfeiçoando cada dia mais, estou sempre em busca
                    de aprender novas teconologias e masterizar as que já utilizo!
              </p>
          </div>
          <div className={styles.sobre__imagem}></div>
        </div>  
      </section>
    )
}