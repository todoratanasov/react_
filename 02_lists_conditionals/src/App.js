import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { id: "1", name: "Max", age: 28 },
      { id: "2", name: "Manu", age: 29 },
      { id: "3", name: "Stephanie", age: 26 }
    ],
    otherState: "some other value",
    showPersons: false
  };
  //по този начин си взимам persons от state-а, изваждам със splice намиращото се на този индекс нещо и после отново set-вам стейта, а с това си викам и рендер метода
  deletePersonHandler = personIndex => {
    //със slice без аргументи си създаваме копие на масива от state-a, за да можем него да си манипулираме
    const persons = this.state.persons.slice();
    persons.splice(personIndex, 1);
    //след като сме изманипулирали масива просто си го запазваме отново в state-a
    this.setState(persons);
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id == id;
    });
    //тук използвайки spread оператора ( ... ) ще вземе всичко, което има в стейта и ще създаде копие
    const person = {
      ...this.state.persons[personIndex]
    };
    person.name = event.target.value;
    //тук отново си правим пълно копие на state-а по този начин, променяме само това, кеото икаме
    const persons = [...this.state.perons];
    persons[personIndex] = person;
    //и тук вече си сетваме новия стейт
    this.setState({
      persons
    });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };
  //всичко в render метода се изпълнява когато реакт рендерира или ререндерира компонента
  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer"
    };
    //тук си дефинираме нещо, което ще напълним, ако се изпълни някакво условие (if-a по-долу)
    let persons = null;

    if (this.state.showPersons) {
      //тук итерираме през стейта и с map връщаме за всеки person по една попълнена компонента Person
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                key={person.id}
                name={person.name}
                age={person.age}
                click={() => this.deletePersonHandler(index)}
                changed={event => this.nameChangedHandler(event, person.id)}
              />
            );
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button style={style} onClick={this.togglePersonsHandler}>
          Toggle Persons
        </button>
        {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
