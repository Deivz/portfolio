import React from "react"
import { Chrono } from "react-chrono";
import experiencias from "./experiencias"
import experienciasSemTitulo from "./experienciasSemTitulo"
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

    const isPhone = useMediaQuery('(max-width: 650px)');
    const isPhoneHor = useMediaQuery('(max-width: 1000px)');
    const isDesktop = useMediaQuery('(min-width: 1100px)');
    

    return (
        <section className={styles.experiencia} id="experiencias">
            <h2 className={styles.titulo}><FaHammer style={{paddingBottom: 9}}/>Experiência Profissional</h2>
            <div className={styles.container}>
                {isPhone ?
                <div className={styles.timeline}>
                    <Chrono items={experienciasSemTitulo} mode="VERTICAL" disableAutoScrollOnClick={true} cardHeight={100} cardWidth={600} lineWidth={1} theme={{
                        primary: "black",
                        secondary: "lightblue",
                        cardBgColor: "white",
                        cardForeColor: "black",
                        titleColor: "black"
                    }}/>
                </div>
                : isPhoneHor ?
                <div className={styles.timeline}>
                    <Chrono items={experiencias} mode="VERTICAL" disableAutoScrollOnClick={true} cardHeight={100} cardWidth={600} lineWidth={1} theme={{
                        primary: "black",
                        secondary: "lightblue",
                        cardBgColor: "white",
                        cardForeColor: "black",
                        titleColor: "black"
                    }}/>
                </div>
                : isDesktop ?
                <div className={styles.timeline}>
                    <Chrono items={experiencias} mode="VERTICAL_ALTERNATING" enableOutline allowDynamicUpdate={true} cardHeight={200} cardWidth={600} theme={{
                        primary: "black",
                        secondary: "lightblue",
                        cardBgColor: "white",
                        cardForeColor: "black",
                        titleColor: "black"
                    }}/>
                </div>
                :``}
            </div>
        </section>
        
    );
}