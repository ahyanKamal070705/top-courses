import { useState } from "react";
import Card from "./Card";

export const Cards = ({ value, category }) => {
  const [liked, setLiked] = useState([]);
 
  let allINOneArray = [];
  let store = value.data;


  function getCourses() {
    // If category is "All", gather all items
    if (category === "All") {
      Object.values(store).forEach((item) => {
        item.forEach((element) => {
          allINOneArray.push(element);
        });
      });
    } else {
      // Filter items based on the specified category
      const filteredItems = store[category] || []; // Get items based on category
      filteredItems.forEach((element) => {
        allINOneArray.push(element); // Push filtered items into the array
      });
    }
  }

  getCourses();
  console.log(allINOneArray);

  return (
    <div>
      {allINOneArray.map((items) => {
        return <Card key={items.id} items={items} liked={liked} setLiked={setLiked} />;
      })}
    </div>
  );
};

export default Cards;
