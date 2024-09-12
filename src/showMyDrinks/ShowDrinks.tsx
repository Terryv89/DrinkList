import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";

interface Drink {
  idDrink: string;
  strDrink: string;
  strDrinkThumb: string;
  strInstructions: string;
}

const ShowDrinks: React.FC = () => {
  const [myDrinkList, setMyDrinkList] = useState<Drink[]>([]);

  useEffect(() => {
    const savedDrinkList = localStorage.getItem("myDrinkList");
    if (savedDrinkList) {
      setMyDrinkList(JSON.parse(savedDrinkList));
    }
  }, []);

  const handleDelete = (idDrink: string) => {
    const updatedDrinkList = myDrinkList.filter(
      (drink) => drink.idDrink !== idDrink
    );
    setMyDrinkList(updatedDrinkList);
    localStorage.setItem("myDrinkList", JSON.stringify(updatedDrinkList));
  };
  return (
    <main>
      <h2>My Drink List</h2>
      {myDrinkList.length > 0 ? (
        myDrinkList.map((drink) => (
          <Card
            onClick={(e) => {
              e.stopPropagation();
              handleDelete(drink.idDrink);
            }}
            style={{ cursor: "pointer", margin: "1rem", width: "18rem" }}
            className="m-3"
            key={drink.idDrink}
          >
            <Card.Body>
              <Card.Title>{drink.strDrink}</Card.Title>
              <Card.Img
                src={drink.strDrinkThumb}
                alt={drink.strDrink}
                width="100"
              />
              <Card.Text>{drink.strInstructions}</Card.Text>
            </Card.Body>
          </Card>
        ))
      ) : (
        <p>No drinks in your list.</p>
      )}
    </main>
  );
};

export default ShowDrinks;
