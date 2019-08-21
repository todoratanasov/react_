import React, { useEffect, useRef, useContext } from "react"; //useEffect  е изключително важен хук
import AuthContext from "../../Context/auth-context";

const cockpit = props => {
  //за да ползваме ref във функционален компонент ползваме react hook и след това си ползваме тази променлива в елемента, който искаме да реферираме
  const toggleButtonRef = useRef(null);

  //отново с react hook може да се позлва и context-a във функционален компонент:
  const authContext = useContext(AuthContext);
  //след като сме си закачили контекста на authContext можем да си го ползваме като обект
  console.log(authContext.login);

  //използвайки useEffect всъщност ни дава функция, която ще се изпълни при всеки рендър цикъл
  //Втория аргумент е особено важен защото там се подават променливите, за които искаме useEffect да следи и при промяна само при тях да се изпълнява функцията. Ако се подаде празен масив ще се изпълни функцията само веднъж и никога повече
  useEffect(() => {
    //http request...
    //!!!!Ако подадем return (принципно няма) някаква функция то тя ще се изпъни преди основната функция и реално това можем да ползваме като componentDidUnmount (дистрой) като това ще се случи СЛЕД ПЪРВИЯ рендър цикъл
  }, [props.persons]);

  //няма проблем да се ползват няколко useEffect-a
  useEffect(() => {
    //след като сме си създали променлива и сме си я привоили на бутона долу тук можем да си викаме в случая click() и бутона ще си се кликне
    toggleButtonRef.current.click();
  }, []);
  const style = {
    backgroundColor: "white",
    font: "inherit",
    border: "1px solid blue",
    padding: "8px",
    cursor: "pointer"
  };
  return (
    <div>
      <h1>Hi, I'm a React App</h1>
      <p>This is really working!</p>
      <button ref={toggleButtonRef} className={style} onClick={props.clicked}>
        Toggle Persons
      </button>
    </div>
  );
};
//това е важна оптимизация за функционални компоненти защото когато няма промяна в този компонент memo ще върне снапшот на компонента от преди промяната, а няма да го рендерира отново, ако парент компонент се ререндерира по някаква причина
export default React.memo(cockpit);
