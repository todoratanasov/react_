import React, {useEffect} from "react"//useEffect  е изключително важен хук
const cockpit=(props)=>{

    //използвайки useEffect всъщност ни дава функция, която ще се изпълни при всеки рендър цикъл
    //Втория аргумент е особено важен защото там се подават променливите, за които искаме useEffect да следи и при промяна само при тях да се изпълнява функцията. Ако се подаде празен масив ще се изпълни функцията само веднъж и никога повече
    useEffect(()=>{
        //http request...
        //!!!!Ако подадем return (принципно няма) някаква функция то тя ще се изпъни преди основната функция и реално това можем да ползваме като componentDidUnmount (дистрой) като това ще се случи СЛЕД ПЪРВИЯ рендър цикъл
    },[props.persons])

    //няма проблем да се ползват няколко useEffect-a
    useEffect(()=>{

    })
    const style = {
        backgroundColor: "white",
        font: "inherit",
        border: "1px solid blue",
        padding: "8px",
        cursor: "pointer"
      };
    return(
        <div>
            <h1>Hi, I'm a React App</h1>
            <p>This is really working!</p>
            <button className={style} onClick={props.clicked}>
            Toggle Persons
            </button>
        </div>
        
    )
}
//това е важна оптимизация за функционални компоненти защото когато няма промяна в този компонент memo ще върне снапшот на компонента от преди промяната, а няма да го рендерира отново, ако парент компонент се ререндерира по някаква причина
export default React.memo(cockpit);