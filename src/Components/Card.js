import {CiHeart } from "react-icons/ci";
import { useState } from "react";
import { toast } from "react-toastify";
import { IoIosHeart } from "react-icons/io";

const Card = ({ items, liked, setLiked }) => {
  function filterArray(id) {
    return liked.filter((elements) => elements != id);
  }

  function add(id) {
    setLiked((prevState) => {
      return [...prevState, id];
    });
  }

  function changeHandler() {
    if (liked.includes(items.id)) {
      setLiked(filterArray(items.id));
      toast.warning("like removed");
    } else {
      if (liked.length == 0) {
        setLiked([items.id]);
      } else {
        add(items.id);
      }
      toast.success("like added");
    }
 
  }
   
  return (
    <div>
      <div>
        <img src={items.image.url}></img>
      </div>
      <div>
        <button onClick={changeHandler}>
          {liked.includes(items.id) ? (
            <div>
              <IoIosHeart />
            </div>
          ) : (
            <div>
              <CiHeart />
            </div>
          )}
        </button>
      </div>

      <div>{items.title}</div>

      <div>{
         items.description.length>100?(items.description.substring(0,100)+"......."):(items.description)
      }
      </div>
    </div>
  );
};

export default Card;
