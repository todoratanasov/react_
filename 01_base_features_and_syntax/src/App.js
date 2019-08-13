//Ако ще ползвам hooks, което е всъщност новото в Реакт, за да се ползват само функционални компоненти, си го импортвам отново от реакт, но реакт трябва да е 16.8.. и нагоре
//в случая си импортвам useState hook (всички hook започват с use)
import React, { Component, useState } from "react";
import "./App.css";
import Person from "./Person/Person";
//това е класовия подход. Закоментирам го защото по-долу ще ползвам функционален компонент на това същото
// class App extends Component {
//   state = {
//     persons: [
//       {
//         name: "Max",
//         age: 29
//       },
//       {
//         name: "Manu",
//         age: 30
//       },
//       {
//         name: "Stef",
//         age: 26
//       }
//     ]
//   };
//   //методите се именуват по този начин като Handler накрая означава, че ще се вика и това е конвенция
//   switchNameHandler = () => {
//     //със setState merge-ваме този стейт с другия като промените ще бъдат направени само в това, което подаваме
//     this.setState({
//       persons: [
//         {
//           name: "Maximilian",
//           age: 29
//         },
//         {
//           name: "Manu",
//           age: 30
//         },
//         {
//           name: "Stef",
//           age: 26
//         }
//       ]
//     });
//     this.state.persons[0].name = "Maximilian";
//   };
//   //подавайки между таговете на компонентите съдържание може да се ползва и то (виж Person компонента)
//   //на button-a подаваме по този начин метод на класа, който искаме да се изпълнява
//   render() {
//     return (
//       <div className="App">
//         <h1>Hi, I'm a react app</h1>
//         <Person
//           name={this.state.persons[0].name}
//           age={this.state.persons[0].age}
//         />
//         <Person
//           name={this.state.persons[1].name}
//           age={this.state.persons[1].age}
//         />
//         <button onClick={this.switchNameHandler}>Switch name</button>
//         <Person
//           name={this.state.persons[2].name}
//           age={this.state.persons[2].age}
//         >
//           My hoodies are: Racing
//         </Person>
//       </div>
//     );
//   }
// }

const App = props => {
  //по този начин се ползва hook-a, за да си инициализираме state в този компонент като в случая stateArr ще бъде array, който ще има на индекс 0 самия стейт и на индекс 1 - функция, която ще ни позволява да променяме стейта или можем да си го деструктнем използвайки es6. Закоментирам първия подход
  //const stateArr = useState({

  //////много важно/////////
  //в случая setPersonsState функцията, която променя стейта НЕ MERGE-ва, а директно set-ва новия стейт на мястото на стария!!!!! Така, че ако ще се подава нов стейт се подава целия с промените като можем все пак да си достъпваме стария стейт (personsState в случая), за да си го подаваме на промяната или другия вариант (който често се използва) е да използваме useState много пъти, за да си държим различни неща. В случая е обект с едно пропърти persons, но ако искаме да имаме друго пропърти просто ще си направим нов useState, който ще държи другото пропърти и това е правилния начин
  const [personsState, setPersonsState] = useState({
    persons: [
      {
        name: "Max",
        age: 29
      },
      {
        name: "Manu",
        age: 30
      },
      {
        name: "Stef",
        age: 26
      }
    ]
  });

  const switchNameHandler = () => {
    setPersonsState({
      persons: [
        {
          name: "Maximilian",
          age: 29
        },
        {
          name: "Manu",
          age: 30
        },
        {
          name: "Stef",
          age: 26
        }
      ]
    });
    personsState.persons[0].name = "Maximilian";
  };
  return (
    //защото не сме в клас вече не използваме this, за да си закачим медота switchNameHandler, а просто си го подаваме между скобите
    <div className="App">
      <h1>Hi, I'm a react app</h1>
      <Person
        name={personsState.persons[0].name}
        age={personsState.persons[0].age}
      />
      <Person
        name={personsState.persons[1].name}
        age={personsState.persons[1].age}
      />
      <button onClick={switchNameHandler}>Switch name</button>
      <Person
        name={personsState.persons[2].name}
        age={personsState.persons[2].age}
      >
        My hoodies are: Racing
      </Person>
    </div>
  );
};
export default App;
