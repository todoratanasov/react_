import React from "react";
//props е обект с всички пропъртита, които се подават на компонента
//използвайки props.children (държавно пропърти) достъпваме съдържанието, което се подава на нашия компонент межжду отварящ и затварящ таг
//можем да си подаваме през props и функции като в случая с onClick подаваме на параграфа тази функция и пак ще работи
const person = props => {
  return (
    <div className="Person">
      <p onClick={props.click}>
        I'm {props.name} and I'm {props.age} years old!
      </p>
      <p>{props.children}</p>
      {/* от тук с onChange ще подаваме информация на парент компонента */}
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  );
};

export default person;
