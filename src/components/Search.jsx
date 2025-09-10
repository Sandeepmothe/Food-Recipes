import { useEffect, useState } from "react";
import styles from './search.module.css';
const URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = "9c7efb20418f4df29f282e22836feba2";
export default function Search({foodData, setFoodData, setFoodId}) {
  const [query, setQuery] = useState("pizza");
  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
      const data = await res.json();
      const foodList = data.results
      console.log(foodList);
      setFoodData(foodList);
      setFoodId(foodList[0].id);
    }
    fetchFood();
  }, [query]);
  // console.log("Component Rendered", query);
  return (
    <div className={styles.searchContainer}>
      <input className={styles.input}
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
}
