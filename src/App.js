import Competencias from "./components/competencias";
import Experiencias from "./components/experiencias";
import Topo from "./components/topo"
import Home from "./components/home";
import Sobre from "./components/sobre"
import Formulario from "./components/formulario";

function App() {
  return (
    <div>
      <Experiencias />
      <Formulario />
      <Home />
      <Topo />
      <Sobre />
      <Competencias />
    </div>
  );
}

export default App;
