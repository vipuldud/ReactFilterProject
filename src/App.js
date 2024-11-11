import logo from './logo.svg';
import './App.css';
import FoodData from './FoodData';
import Card from './Card';
import { useState } from 'react';

function App() {
  const [items, setItems] = useState(FoodData);

  const filterItems = (type) => {
    if (type === "All") {
      setItems(FoodData); // Show all items
    } else {
      const filteredItems = FoodData.filter((item) => item.foodType === type);
      setItems(filteredItems);
    }
  };

  return (
    <div className="p-4">
      <div className="flex justify-center space-x-4 mb-6">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => filterItems("All")}
        >
          All
        </button>
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => filterItems("Breakfast")}
        >
          Breakfast
        </button>
        <button
          className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => filterItems("Lunch")}
        >
          Lunch
        </button>
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => filterItems("Dinner")}
        >
          Dinner
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((item) => (
          <div key={item.foodId}>
            <Card item={item} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
