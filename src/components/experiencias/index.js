import React from "react"
import { Chrono } from "react-chrono";
import experiencias from "./experiencias"
import styles from "./experiencias.module.css"
import {FaHammer} from "react-icons/fa"
import { useState, useEffect } from 'react';

export default function Experiencias() {
    
    function useMediaQuery(query) {
        const [matches, setMatches] = useState(false);
      
        useEffect(() => {
          const media = window.matchMedia(query);
          if (media.matches !== matches) {
            setMatches(media.matches);
          }
          const listener = () => {
            setMatches(media.matches);
          };
          media.addListener(listener);
          return () => media.removeListener(listener);
        }, [matches, query]);
      
        return matches;
    }

    const isDesktop = useMediaQuery('(min-width: 1200px)');

    return (
        <section className={styles.experiencia} id="experiencias">
            <h2 className={styles.titulo}><FaHammer style={{paddingBottom: 9}}/>Experiência Profissional</h2>
            <div className={styles.container}>
            {isDesktop ? <div style={{ width: "96%", height: "70vh", marginLeft: "auto", marginRight: "auto"}}>
                    <Chrono items={experiencias} mode="VERTICAL_ALTERNATING" allowDynamicUpdate={true} cardHeight={200} cardWidth={600} itemWidth={150}/>
                </div> : <div style={{ width: "100%", height: "65vh"}}>
                    <Chrono items={experiencias} mode="VERTICAL" allowDynamicUpdate={true} cardHeight={200} cardWidth={600} itemWidth={650} lineWidth={1} />
                </div>}
            </div>
        </section>
        
    );
}