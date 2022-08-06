import './App.css';
import Home from './PortfolioContainer/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./PortfolioContainer/Components/NavBar";
import { Skills } from "./PortfolioContainer/Components/Skills";
import { Projectss } from "./PortfolioContainer/Components/Projectss";
import { Experience } from "./PortfolioContainer/Components/Experience";
import { Contact } from "./PortfolioContainer/Components/Contact";
import { Footer } from './PortfolioContainer/Components/Footer';

function App() {
  return (
    <div className="App">
      <NavBar />      
      <Home /> 
      <Experience />         
      <Projectss />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
