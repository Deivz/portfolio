import styles from "./competencias.module.css"
import { Progress } from "reactstrap"
import {FaCheckCircle, FaUserGraduate} from "react-icons/fa"

export default function Competencias() {
  return (
    <section className={styles.competencias} id="competencias">
      <h2 className={styles.titulo}><FaUserGraduate style={{paddingBottom: 6}}/>Habilidades e Competências</h2>
      <div className={styles.container}>
        <div className={styles.experiencia}>
          <p><FaCheckCircle style={{paddingBottom: 2, color:'red'}}/>Desenvolvimento de sites com acessibilidade e responsividade utilizando Bootstrap, CSS3 e HTML5;</p>
          <p><FaCheckCircle style={{paddingBottom: 2, color:'red'}}/>Desenvolvimento de páginas/sistemas web utilizando JavaScript, TypeScript;</p>
          <p><FaCheckCircle style={{paddingBottom: 2, color:'red'}}/>Desenvolvimento de SPA utilizando React.JS/React.TS;</p>
          <p><FaCheckCircle style={{paddingBottom: 2, color:'red'}}/>Desenvolvimento de API utilizando Node.JS e PHP;</p>
          <p><FaCheckCircle style={{paddingBottom: 2, color:'red'}}/>Conhecimento de estruturação de banco de dados e queries utilizando SQL.</p>
        </div>
        <div className={styles.habilidades}>
          <div className={styles.item}>
            <div className="text-right"><strong>Web Design</strong></div>
            <Progress multi>
              <Progress bar value="50" color="secondary">Júnior</Progress>
            </Progress>
          </div>
          <div className={styles.item}>
            <div className="text-right"><strong>Front-end</strong></div>
            <Progress multi>
              <Progress bar value="50" color="secondary">Júnior</Progress>
            </Progress>
          </div>
          <div className={styles.item}>
            <div className="text-right"><strong>Back-end</strong></div>
            <Progress multi>
              <Progress bar value="25" color="primary">Iniciante</Progress>
            </Progress>
          </div>
          <div className={styles.item}>
            <div className="text-right"><strong>Git {'&'} Github</strong></div>
            <Progress multi>
              <Progress bar value="25" color="primary">Iniciante</Progress>
            </Progress>
          </div>
        </div>
      </div>
    </section>
  )
}