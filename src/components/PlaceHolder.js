import { useEffect, useState } from "react";

const PlaceHolder = ({ needed }) => {
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      if (!needed) {
        setDisplay("show");
      }
    }, 2000);
    
  }, [needed])
 

  return (
    <div className={`${display} placeholder`}>
      <img src="images/severe-thunderstorm.svg" alt="" />
      <h3>
        You: <span>Why am I seeing this ?</span>
      </h3>
      <h3>
        Good Samaritan:{" "}
        <span>
          Check if your data is on, also check if you've granted location access
          to your browser
        </span>
      </h3>
    </div>
  );
};

export default PlaceHolder;
