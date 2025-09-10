import styles from "./item.module.css";
export default function Item({ item }) {
  return (
    <div>
      <div className={styles.itemCard}>
        <img
          className={styles.image}
          src={`https://spoonacular.com/cdn/ingredients_100x100/` + item.image}
        />
        <div className={styles.nameCard}>
          <h3 className={styles.name}>{item.name}</h3>
          <h3 className={styles.units}>
            {item.amount} <span>{item.unit}</span>
          </h3>
        </div>
      </div>
    </div>
  );
}
