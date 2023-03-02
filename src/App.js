import "./App.css";
import Header from "./Header/Header";
import Product from "./Product/Product";
import "./App.css"

function App() {
  return (
    <div >
  <Header />
  <div className="countainer">
  <Product tittle = 'samsung' image = 'logo192.png' price = {28}/>
  <Product tittle = 'LG' image = 'logo192.png' price = {50}/>
  <Product tittle = 'Apple' image = 'logo192.png' price = {150}/>
  </div>
  </div>
  );
}

export default App;
