import Navbar from "./Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Pricing from "./pages/Pricing";
import './styles.css'


function App() {
  let Component;
  switch(window.location.pathname) {
    case "/":
      Component = Home;
      break
    case "/pricing":
      Component = Pricing;
      break
    case "/about":
      Component = About;
      break
  }
  return (
    <div>
      <Navbar />
      <div className="container">
        <Component />
      </div>
    </div>
  )
}

export default App;
