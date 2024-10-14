import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./Pages/Home";
import Shop from "./Pages/Shop";
import Products from "./Pages/Products";
import Cart from "./Pages/Cart";
import { Provider } from 'react-redux';
import ScrollToTop from "./Components/ScrollToTop";
import store from './store/store'; 

function App() {
  return (
    <div>
        <Provider store={store}>
      <BrowserRouter>
        <ScrollToTop/>
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Shop" element={<Shop/>}/>
        <Route path="/Products" element={<Products/>}/>         
        <Route path="/Products/:id" element={<Products/>}/> 
        <Route path="/Cart" element={<Cart/>}/>
        <Route path="/Cart/:id" element={<Cart/>}/>       
        </Routes>
      </BrowserRouter>
      </Provider>

    </div>
  );
}

export default App;
