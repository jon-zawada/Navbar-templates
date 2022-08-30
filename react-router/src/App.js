import Navbar from "./Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Pricing from "./pages/Pricing";
import { Route, Routes } from "react-router-dom";


function App() {

  return (
    <div>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/pricing' element={<Pricing/>} />
          <Route path='/about' element={<About/>} />
        </Routes>
      </div>
    </div>
  )
}

export default App;
