import './App.css';
import image from './shopping.jpg';
import imageLady from './lady.jpg';
import { GroceryList } from './GroceryList';


function App() {
  return (
    <div className='app'>
      <div className="container">
        <img src={ image } width="220px" alt="shopping_list"/>
      </div>
      <div className="container">
        <h1>Grocery List</h1>
      </div>
      <GroceryList/>
      <div className="container">
        <img src={ imageLady } width="300px" alt="lady"/>
      </div>
    </div>
  );
}

export default App;
