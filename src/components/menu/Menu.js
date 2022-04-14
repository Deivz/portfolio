import styles from "./menu.module.css";

// let menuAberto = document.querySelector(".abrir__menu");

// function toggle(event){
// 	if(menuAberto.classList.contains("change")){
// 		document.documentElement.classList.remove('menu__ativo');
// 		menuAberto.classList.remove("change");
// 		document.documentElement.style.overflow = 'auto';
// 		document.body.scroll = "yes";
// 	}else{
// 		document.documentElement.classList.add('menu__ativo');
// 		menuAberto.classList.add("change");
// 		document.documentElement.style.overflow = 'hidden';
// 		document.body.scroll = "no";
// 	}
// }

// menuAberto.addEventListener("click", toggle, false);

// document.documentElement.onclick = function(event) {
//     if (event.target === document.documentElement) {
//         document.documentElement.classList.remove('menu-ativo');
//         menuAberto.classList.remove("change");
//     }
// }

function Menu(){
    return(
        <>
            <div>
                <div className={styles.menu__abrir}>
                    <div className={styles.bar1}></div>
                    <div className={styles.bar2}></div>
                    <div className={styles.bar3}></div>
                </div>
            </div>
            <nav className={styles.nav__menu}>
                <ul className={styles.nav__lista}>
                    <li className={styles.nav__item}>Home</li>
                    <li className={styles.nav__item}>Sobre</li>
                    <li className={styles.nav__item}>Competências</li>
                    <li className={styles.nav__item}>Experiências</li>
                    <li className={styles.nav__item}>Portfolio</li>
                    <li className={styles.nav__item}>Contato</li>
                </ul>
            </nav>
        </>
    )
}

export default Menu