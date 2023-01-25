import { Divider, Input } from 'antd';
import { useState } from 'react';

function AddFoodForm(props) {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [calories, setCalories] = useState('');
  const [servings, setServings] = useState('');
  function handleNameInput(event) {
    setName(event.target.value);
  }
  function handleImageInput(event) {
    setImage(event.target.value);
  }
  function handleCaloriesInput(event) {
    setCalories(event.target.value);
  }
  function handleServingsInput(event) {
    setServings(event.target.value);
  }
  function handleFormSubmit(event) {
    event.preventDefault();
    const newFood = {
      _id: new Date().getMilliseconds(),
      name: name,
      image: image,
      calories: calories,
      servings: servings,
    };
    console.log('Adding Food: ', newFood);
    props.handleAddFood(newFood);
    setName('');
    setImage('');
    setCalories('');
    setServings('');
  }
  return (
    <form onSubmit={handleFormSubmit}>
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input value={name} type="text" onChange={handleNameInput} />

      <label>Image</label>
      <Input value={image} type="text" onChange={handleImageInput} />

      <label>Calories</label>
      <Input value={calories} type="number" onChange={handleCaloriesInput} />

      <label>Servings</label>
      <Input value={servings} type="number" onChange={handleServingsInput} />

      <button type="submit">Create</button>
    </form>
  );
}

export default AddFoodForm;
