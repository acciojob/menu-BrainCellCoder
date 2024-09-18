import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Breakfast from "./Breakfast";
import Lunch from "./Lunch";
import Shakes from "./Shakes";
import All from "./All";

const data = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "./images/item-1.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "./images/item-2.jpeg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "./images/item-3.jpeg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "./images/item-4.jpeg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "./images/item-5.jpeg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "./images/item-6.jpeg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "./images/item-7.jpeg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "./images/item-8.jpeg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "./images/item-9.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];
const App = () => {
  const [list, setList] = useState(data);
  const [breakfastList, setBreakfastList] = useState("");
  const [lunchList, setLunchList] = useState("");
  const [shakesList, setShakesList] = useState("");

  const breakfast = () => {
    const items = list.filter((item) => item.category == "breakfast");
    setBreakfastList(items);
  };
  const lunch = () => {
    const items = list.filter((item) => item.category == "lunch");
    setLunchList(items);
  };
  const shakes = () => {
    const items = list.filter((item) => item.category == "shakes");
    setShakesList(items);
  };

  useEffect(() => {
    breakfast();
    lunch();
    shakes();
  }, []);

  return (
    <BrowserRouter>
      <h1 style={{ textAlign: "center" }}>Our Menu</h1>
      <nav style={{ display: "flex", justifyContent: "center" }}>
        <div
          style={{
            width: "500px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Link
            style={{
              textDecoration: "none",
              color: "gold",
              fontSize: "1.5rem",
            }}
            to="/all"
          >
            All
          </Link>
          <Link
            style={{
              textDecoration: "none",
              color: "gold",
              fontSize: "1.5rem",
            }}
            to="/breakfast"
          >
            Breakfast
          </Link>
          <Link
            style={{
              textDecoration: "none",
              color: "gold",
              fontSize: "1.5rem",
            }}
            to="/lunch"
          >
            Lunch
          </Link>
          <Link
            style={{
              textDecoration: "none",
              color: "gold",
              fontSize: "1.5rem",
            }}
            to="/shakes"
          >
            Shakes
          </Link>
        </div>
      </nav>
      <Routes>
        <Route path="/all" element={<All list={list} />} />
        <Route path="/breakfast" element={<Breakfast list={breakfastList} />} />
        <Route path="/lunch" element={<Lunch list={lunchList} />} />
        <Route path="/shakes" element={<Shakes list={shakesList} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
