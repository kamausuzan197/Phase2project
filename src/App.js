
import Navbar from './components/Navbar';
import { Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Order from './pages/Order';
import Recipes from './pages/Recipes';
import Contact from './pages/Contact';
import "./index.css"

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />}></Route>
        <Route exact path='/order' element={<Order />} ></Route>
        <Route exact path='/recipes' element={<Recipes />} ></Route>
        <Route exact path='/contact' element={<Contact />}></Route>
      </Routes>
    </div >

  );
}

export default App;
