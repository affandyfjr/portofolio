import About from "./Pages/About.jsx";

import Work from "./Pages/Work.jsx";
import Home from "./Pages/Home.jsx";
import Skill2 from "./Pages/Skill2.jsx";
import Navbar from "./component/Navbar.jsx";

function App() {
  return (
    <div>
      <Navbar/>
      <Home />
      <About />
      <Skill2 />

      <Work />
    </div>
  );
}

export default App;
