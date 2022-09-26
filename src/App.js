import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/home/Home';
import Products from './pages/products/Products';
import NavComp from './components/navbar/Navbar';
function App() {
  return (
    
    <BrowserRouter>
    <NavComp />
       <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/product/:productId" element={<Products />}></Route>
       </Routes>
    </BrowserRouter>
  );
}

export default App;
