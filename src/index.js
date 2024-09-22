import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// json data
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  // const style = {
  //   color: "#44accd",
  //   fontSize: "50px",
  //   textTransform: "uppercase",
  // };
  return (
    // inline styling
    // <h1 style={{ color: "#44accd", fontSize: "50px" }}>Test & Twist Restro</h1>

    // inline style using variable
    // <h1 style={style}>Test & Twist Restro</h1>
    <div className="header">
      <h1>Test & Twist Restro</h1>
    </div>
  );
}
function Menu() {
  const pizzas = pizzaData;
  // const pizzas = [];
  const numPizza = pizzas.length;
  return (
    <main className="menu">
      <h2> Our Menu</h2>

      {/* this approach for a single data ❤️‍🔥❤️‍🔥❤️‍🔥*/}
      {/* <Pizza
          photo="pizzas/focaccia.jpg"
          name="Focaccia"
          ingredient="Bread with italian olive oil and rosemary"
          price={100}
          />*/}

      {/* conditional rendering using short circuiting. Not Recommended 👎👎👎*/}
      {/* {numPizza > 0 && (
        <ul className="pizzas">
          {pizzas.map((pizza) => (
            <Pizza pizzaObj={pizza} key={pizza.name} />
          ))}
        </ul>
      )} */}

      {/* Recommended 🔥🔥🔥*/}
      {/* conditional rendering using ternary operator ❤️‍🔥❤️‍🔥❤️‍🔥*/}
      {numPizza > 0 ? (
        <>
          <p>
            ❤️❤️❤️ We ar serving 6 delicious Food. Let's Order and Enjoy.❤️❤️❤️
          </p>
          <ul className="pizzas">
            {/* this is list rendering: all the data dynamically rendering */}
            {pizzas.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>Working on Menu. Please Visit Sometime Latter...</p>
      )}
    </main>
  );
}

// function Pizza(props) {

// props destructuring 🔥🔥🔥
function Pizza({ pizzaObj }) {
  // console.log(props);

  // Conditional return ❤️‍🔥❤️‍🔥❤️‍🔥
  // if (props.pizzaObj.soldOut) {
  //   return null;
  // }
  return (
    // dynamically setting 'sold-out' class using ternary operator ❤️‍🔥❤️‍🔥❤️‍🔥
    <div className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name}></img>
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>

        {/* Render text conditionally. Not Recommended 👎👎👎 */}
        {/* {pizzaObj.soldOut ? (
          <span>SOLD OUT</span>
        ) : (
          <span>{pizzaObj.price}</span>
        )} */}

        {/* Recommended 🔥🔥🔥*/}
        {/* Render text conditionally */}
        <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price}</span>
      </div>
    </div>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 9;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(hour);
  console.log(isOpen);
  return (
    <div className="footer">
      <span>
        {/* {isOpen ? (
          <span className="order">
            It is <b>{new Date().toLocaleString()} </b>
            We are Open & Looking for Gusts until <b>11:30 PM</b>.
            <p>Please Come and Visit or Order Online</p>
            <button className="btn">Order</button>
          </span>
        ) : ( */}
        {isOpen ? (
          // rendering as a component in conditional rendering :❤️‍🔥❤️‍🔥❤️‍🔥
          <Open closeHour={closeHour} openHour={openHour} />
        ) : (
          <p>
            We are Happy to Welcome You between{" "}
            <b>
              {openHour}:00 and {closeHour}:00
            </b>
          </p>
        )}
      </span>
    </div>
  );
}

function Open({ openHour, closeHour }) {
  return (
    <div>
      <span className="order">
        It is <b>{new Date().toLocaleString()} </b>
        We are Open & Looking for Gusts.
        <p>
          Please Come and Visit between{" "}
          <b>
            {openHour}:00 to {closeHour}:00
          </b>{" "}
          or Order Online
        </p>
        <button className="btn">Order</button>
      </span>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
// it is better to use StrictMode
