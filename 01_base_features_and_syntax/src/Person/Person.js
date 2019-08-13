import React from "react";
//props е обект с всички пропъртита, които се подават на компонента
//използвайки props.children (държавно пропърти) достъпваме съдържанието, което се подава на нашия компонент межжду отварящ и затварящ таг
const person = props => {
  return (
    <div>
      <p>
        I'm {props.name} and I'm {props.age} years old!
      </p>
      <p>{props.children}</p>
    </div>
  );
};

export default person;
