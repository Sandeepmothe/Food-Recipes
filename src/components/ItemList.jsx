import Item from "./Item";

export default function ItemList({ food, loading }) {
  return (
    <div>
      {loading ? "Loading" :food.extendedIngredients.map((item) => (
        <Item key={item.id} item={item}/>
      ))}
    </div>
  );
}
