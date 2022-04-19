import styles from "./competencias.module.css"
import { Progress } from "reactstrap"
import {FaCheckCircle, FaTools} from "react-icons/fa"

export default function Competencias() {
  return (
    <section className={styles.competencias} id="competencias">
      <h2 className={styles.titulo}><FaTools style={{paddingBottom: 6}}/>Habilidades e Competências</h2>
      <div className={styles.container}>
        <div className={styles.experiencia}>
          <p><FaCheckCircle style={{paddingBottom: 2, color:'green'}}/>Desenvolvimento de páginas web/sistemas com acessibilidade e responsividade utilizando Bootstrap,
           CSS3, HTML5, JavaScript, TypeScript;</p>
          <p><FaCheckCircle style={{paddingBottom: 2, color:'green'}}/>Desenvolvimento de SPA utilizando React.JS/React.TS;</p>
          <p><FaCheckCircle style={{paddingBottom: 2, color:'green'}}/>Desenvolvimento de API utilizando Node.JS e PHP;</p>
          <p><FaCheckCircle style={{paddingBottom: 2, color:'green'}}/>Conhecimento de estruturação de banco de dados e queries utilizando SQL.</p>
        </div>
        <div className={styles.habilidades}>
        <div className={styles.item}>
            <div className="text-right"><strong>Front-end</strong></div>
            <Progress multi style={{border: '1px solid black'}}>
              <Progress bar value="50" color="secondary">Júnior</Progress>
            </Progress>
          </div>
          <div className={styles.item}>
            <div className="text-right"><strong>Programação</strong></div>
            <Progress multi style={{border: '1px solid black'}}>
              <Progress bar value="50" color="secondary">Júnior</Progress>
            </Progress>
          </div>
          <div className={styles.item}>
            <div className="text-right"><strong>UX {'&'} Design</strong></div>
            <Progress multi style={{border: '1px solid black'}}>
              <Progress bar value="50" color="secondary">Júnior</Progress>
            </Progress>
          </div>
          <div className={styles.item}>
            <div className="text-right"><strong>Back-end</strong></div>
            <Progress multi style={{border: '1px solid black'}}>
              <Progress bar value="25" color="primary">Iniciante</Progress>
            </Progress>
          </div>
          <div className={styles.item}>
            <div className="text-right"><strong>DevOps</strong></div>
            <Progress multi style={{border: '1px solid black'}}>
              <Progress bar value="25" color="primary">Iniciante</Progress>
            </Progress>
          </div>
          <div className={styles.item}>
            <div className="text-right"><strong>Git {'&'} Github</strong></div>
            <Progress multi style={{border: '1px solid black'}}>
              <Progress bar value="25" color="primary">Iniciante</Progress>
            </Progress>
          </div>
        </div>
      </div>
    </section>
  )
}