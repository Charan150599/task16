import {useState, useEffect} from 'react'

export default function Home() {
      const [foods, setFoods] = useState([]);

        useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
            .then(res  => res.json())
            .then(data => setFoods(data.meals))
        }, []);

  return (
    <div>
      <h1>Welcome to Our Restaurant</h1>
      <p>Discover delicious meals from around the world!</p>
      <div className="food-list">
        {foods.map(food => (
          <div key={food.idMeal} className="food-item">
            <h2>{food.strMeal}</h2>
            <img src={food.strMealThumb} alt={food.strMeal} />
            <button>Order Now</button>
          </div>
        ))}
      </div>
    </div>
  )
}