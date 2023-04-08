import { useState } from "react";
import "./App.css";
import QuoteBox from "./components/QuoteBox";
import db from "./db/quotes.json";

const arrayColor = ["#00c6ab", 
"#7f5580", 
"#a49ce0", 
"#576373", 
"#320c27", 
"#b1d15e",
"#a16563",
"#bc89ad",
"#9e616d",
"#d9c67f",
"#2f1709",
"#bed9e8",
"#23391d",
"#e4d8e9",
"#2080d8",
"#1e0d14"];

const getRandom = (arrayElements) => {
  const quantityValues = arrayElements.length;
  const randomIndex = Math.floor(Math.random() * quantityValues);
  return arrayElements[randomIndex];
};

function App() {
  const [quote, setQuote] = useState(getRandom(db));

  const [color, setColor] = useState(getRandom(arrayColor));

  const newQuote = () => {
    setQuote(getRandom(db))
    setColor(getRandom(arrayColor))
  };
  

  return (
    <div className="App" style={{backgroundColor: color}}>
      <QuoteBox  
      quote={quote}  
      newQuote={newQuote} 
      color={color}
      />
    </div>
  );
};

export default App;
