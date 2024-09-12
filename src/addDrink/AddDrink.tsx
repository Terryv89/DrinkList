import { useState, useEffect } from "react";

import Card from "react-bootstrap/Card";

const AddDrink = () => {
  const [drinkList, setDrinkList] = useState([]);
  const [search, setSearch] = useState("");
  const [myDrinkList, setMyDrinkList] = useState([]);

  const handleOnchange = (event) => {
    setSearch(event.target.value);
  };

  const handleOnClick = (drink) => {
    setMyDrinkList((prevList) => [...prevList, drink]);
    console.log("added :", drink);
    console.log("mydrinkList", myDrinkList);
  };

  useEffect(() => {
    localStorage.setItem("myDrinkList", JSON.stringify(myDrinkList));
  }, [myDrinkList]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`
      );

      if (!response.ok) {
        throw new Error(`error status ${response.status}`);
      }

      const data = await response.json();
      setDrinkList(data.drinks);
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <main>
      <h2>Add a drink to your drink list</h2>
      <form onSubmit={handleSubmit}>
        <input onChange={handleOnchange} type="text" />
        <button>Search</button>
      </form>
      {drinkList.length > 0 ? (
        drinkList.map((drink) => (
          <Card
            style={{ cursor: "pointer" }}
            onClick={() => handleOnClick(drink)}
            className="m-5 "
            key={drink.idDrink}
          >
            <p>{drink.strDrink}</p>
            <img src={drink.strDrinkThumb} alt={drink.strDrink} width="100" />
            <p>{drink.strInstructions}</p>
          </Card>
        ))
      ) : (
        <p>No drinks found.</p>
      )}
    </main>
  );
};

export default AddDrink;
