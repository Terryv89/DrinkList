import { useEffect, useState } from "react";

import Card from "react-bootstrap/Card";

const GetDrinks = () => {
  const [drinks, setDrinks] = useState([]);

  const fetchDrinks = async () => {
    try {
      const response = await fetch(
        "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic"
      );

      if (!response.ok) {
        throw new Error(`error status ${response.status}`);
      }

      const data = await response.json();
      setDrinks(data.drinks);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    fetchDrinks();
  });

  return (
    <article>
      <h1>Drink List</h1>

      {drinks.map((drink) => (
        <Card key={drink.idDrink}>
          <h2>{drink.strDrink}</h2>
          <img src={drink.strDrinkThumb} alt={drink.strDrink} width="200" />
        </Card>
      ))}
    </article>
  );
};

export default GetDrinks;
