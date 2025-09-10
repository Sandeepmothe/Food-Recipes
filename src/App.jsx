import React, { useState } from "react";
import Search from "./components/Search";
import Header from "./components/Header";
import FoodList from "./components/FoodList";
import "./App.css";
import Container from "./components/Container";
import InnerContainer from "./components/InnerContainer";
import FoodDetails from "./components/FoodDetails";

function App() {
  const [foodData, setFoodData] = useState([]);
  const [foodId, setFoodId] = useState(null);
  return (
    <div>
      <Header />
      <Search
        foodData={foodData}
        setFoodData={setFoodData}
        setFoodId={setFoodId}
      />

      <Container>
        <InnerContainer>
          <FoodList foodData={foodData} setFoodId={setFoodId} />
        </InnerContainer>
        <InnerContainer>
          <FoodDetails foodId={foodId} />
        </InnerContainer>
      </Container>
    </div>
  );
}

export default App;
