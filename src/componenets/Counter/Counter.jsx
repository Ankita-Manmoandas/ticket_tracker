import React,{useState} from "react";
import "./counter.scss";

const Counter = (props) => {
  const [counter, setCounter]= useState(0)

  const handleIncrement = () => {
  if (counter <10) {
    setCounter (counter + 1)
  } else if (counter >= 10) {
    setCounter (counter)
  }}
  const handleDecrement = () => {
    if (counter < 1 ) {
      setCounter (counter)
    }
    else if (counter >= 1) {
      setCounter (counter - 1)

    }
  }


  return <div className="Counter">
    <h3 className="Counter__header"> Tickets </h3>
    <p> {counter} </p>
    <div className="Counter__buttons"> 
    <button className="counter__button" onClick= {handleIncrement}> + </button> 
    <button className="counter__button" onClick={handleDecrement}> - </button> 
    </div>

  </div>
}

export default Counter

//when u click button go  up. when click 0 scores go down. 