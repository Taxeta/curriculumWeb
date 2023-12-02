import Contacto from "../../pages/Contacto/Contacto";
import Presentacion from "../../pages/Presentacion/Presentacion";
import Sidebar from "../Sidebar/Sidebar";
import "./App.css";

const App = (): React.ReactElement => {
  return (
    <main className="main-container">
      <Sidebar />
      <div className="body-container">
        <Presentacion />
        <Contacto />
      </div>
    </main>
  );
};

export default App;
