import React from "react";
import Greeting from "./greeting";
import Message from "./message";
import Button from "./button";

const App = () => {
  const handleClick = () => {
    console.log("Кнопка була натиснута!");
  };

  return (
    <div>
      <Greeting name="Іван" />
      <Message text="Ласкаво просимо до нашого додатку!" />
      <Button onClick={handleClick} />
    </div>
  );
};

export default App;