import { Container } from "react-bootstrap";
import GetDrinks from "../getDrinks/GetDrinks";
import { useState } from "react";

const Home = () => {
  const [showDrinks, setShowDrinks] = useState(false);
  const handleOnClick = () => {
    setShowDrinks(!showDrinks);
  };

  return (
    <Container>
      <main>
        <h1>Home</h1>

        <p>Want to see all drink that we have?</p>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleOnClick}
        >
          {showDrinks ? "Hide drinks" : "Show All Drinks"}
        </button>
        {showDrinks && <GetDrinks />}
      </main>
    </Container>
  );
};

export default Home;
