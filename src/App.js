import "./styles/App.scss";
import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";
import Companies from "./components/main/companies/companies";
import Projects from "./components/main/projects/projects";
import Abilities from "./components/main/abilities/abilities";
import Order from "./components/order/Order";
import Systems from "./components/systems/Systems";

function App() {
  return (
    <div className="App">
      <Home />
      <Systems />
      <Abilities />
      <Projects />
      <Companies />
      <Order />
      <Footer />
    </div>
  );
}

export default App;
