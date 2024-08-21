import About from "./Pages/About.jsx";
import Footer from "./component/footer.jsx";
import Navbar from "./component/Navbar.jsx";
import Work from "./Pages/Work.jsx";
import Home from "./Pages/Home.jsx";
import Skill2 from "./Pages/Skill2.jsx";


function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About/>
      <Skill2/>

      <Work />
      <Footer />
    </div>
  );
}

export default App;
