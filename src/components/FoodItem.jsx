import styles from "./foodlist.module.css";
export default function FoodItem({ food, setFoodId }) {
  return (
    <div className={styles.itemContainer}>
      <img className={styles.itemImage} src={food.image} />
      <div className={styles.itemContent}>
        <h1 className={styles.itemName}>{food.title}</h1>
      </div>
      <div className={styles.buttonContainer}>
        <button
          onClick={() => setFoodId(food.id)}
          className={styles.itemButton}
        >
          View Recipe
        </button>
      </div>
    </div>
  );
}
