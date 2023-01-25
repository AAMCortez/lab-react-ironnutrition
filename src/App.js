import Search from 'antd/es/transfer/search';
import { useState } from 'react';
import './App.css';
import AddFoodForm from './components/AddFoodForm';
import FoodBox from './components/FoodBox';
import foods from './foods.json';

function App() {
  const [food, setFoods] = useState(foods);
  const [filteredFoods, setFilteredFoods] = useState(foods);

  function handleDeleteFood(foodName) {
    const filteredsFoods = filteredFoods.filter((food) => {
       return food.name !== foodName;
    });
    setFilteredFoods(filteredsFoods);
 }

  function handleAddFood(newFood) {
    setFilteredFoods([newFood, ...filteredFoods]);
  }
  function handleFilterFood(keyword) {
    const filteredFoods = foods.filter((food) => {
      return food.name.toLowerCase().includes(keyword.toLowerCase());
    });
    console.log(filteredFoods)
    setFilteredFoods(filteredFoods);
  }
  return (
    <div className="App">
      <Search handleFilterFood={handleFilterFood} />
      <AddFoodForm handleAddFood={handleAddFood} />
      {filteredFoods.map((food) => {
        return (
          <div key={food.name}>
            <FoodBox food={food} handleDeleteFood = {handleDeleteFood} />
          </div>
        );
      })}
    </div>
  );
}

export default App;
