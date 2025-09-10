import { useEffect, useState } from "react";
import styles from "./fooddetail.module.css";
import ItemList from "./ItemList";

export default function FoodDetails({ foodId }) {
  const [food, setFood] = useState([]);
  const [loading, setLoading] = useState(true);
  const API_KEY = import.meta.env.VITE_SPOON_API_KEY;

  useEffect(() => {
    if (!foodId) return;

    async function recipe() {
      try {
        setLoading(true);
        const res = await fetch(
          `https://api.spoonacular.com/recipes/${foodId}/information?includeNutrition=false&apiKey=${API_KEY}`
        );

        if (!res.ok) {
          throw new Error(`Error ${res.status}: ${res.statusText}`);
        }

        const data = await res.json();
        // console.log(data);
        setFood(data);
      } catch (error) {
        console.error("Error fetching recipe:", error);
      } finally {
        setLoading(false);
      }
    }

    recipe();
  }, [foodId]);

  if (loading) return <p>Loading recipe...</p>;
  if (!food) return <p>No recipe found.</p>;

  return (
    <div>
      <div className={styles.maincard}>
        <h1 className={styles.title}>{food.title}</h1>
        <img className={styles.image} src={food.image} alt={food.title} />

        <div>
          <div className={styles.recipeDtails}>
            <span>
              ⌚ <strong>{food.readyInMinutes}</strong>
            </span>
            <span>
              👨‍👩‍👧‍👦 <strong>Serves {food.servings}</strong>
            </span>
            <span>
              <strong>
                {food.vegetarian ? "🥕Vegetarian" : "🍗Non-vegetarian"}
              </strong>
            </span>
          </div>

          <span>
            <strong>${food.pricePerServing} per serving</strong>
          </span>

          <div>
            <h2>Ingredients</h2>
            <ItemList food={food} loading={loading} />
          </div>

          <div>
            <h2>Instructions:</h2>
            <div className={styles.instructionCard}>
              <ol>
                {food.analyzedInstructions?.[0]?.steps?.map((step) => (
                  <li key={step.number}>{step.step}</li>
                )) || <li>No instructions available.</li>}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
