import React, { Component } from "react";
import "./App.css";
import Persons from "../Components/Persons/Persons";
import Cockpit from "../Components/Cockpit/Cockpit"
class App extends Component {
  //ПЪРВО конструктора си е винаги първи в изпълнението
  constructor(props){
    super(props);
    //тук си инициализираме state-а
    this.state = {
      persons: [
        { id: "1", name: "Max", age: 28 },
        { id: "2", name: "Manu", age: 29 },
        { id: "3", name: "Stephanie", age: 26 }
      ],
      otherState: "some other value",
      showPersons: false
    };
  }

  //ВТОРО този life cickle hook ще се изпълни втори
  static getDerivedStateFromProps(props,state){

    return state;
  }
  //по този начин си взимам persons от state-а, изваждам със splice намиращото се на този индекс нещо и после отново set-вам стейта, а с това си викам и рендер метода
  deletePersonHandler = personIndex => {
    //със slice без аргументи си създаваме копие на масива от state-a, за да можем него да си манипулираме
    const persons = this.state.persons.slice();
    persons.splice(personIndex, 1);
    //след като сме изманипулирали масива просто си го запазваме отново в state-a
    this.setState(persons);
  };

  //ЧЕТВЪРТО извиква се след render метода
  componentDidMount(){
    //http рекуести
  }

  //ако това върне false компонента няма да се рендерира изобщо
  shouldComponentUpdate(){
    return true;
  }

  //този хуук се активира когато стейта е променен
  componentDidUpdate(){

  }

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
    const persons = [...this.state.persons];
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
  //ТРЕТО всичко в render метода се изпълнява когато реакт рендерира или ререндерира компонента
  render() {
    
    //тук си дефинираме нещо, което ще напълним, ако се изпълни някакво условие (if-a по-долу)
    let persons = null;

    if (this.state.showPersons) {
      //тук итерираме през стейта и с map връщаме за всеки person по една попълнена компонента Person
      persons = (
        
          <Persons persons={this.state.persons}
          clicked = {this.deletePersonHandler}
          changed = {this.nameChangedHandler}
          />
        
      );
    }

    return (
      <div className="App">
        <Cockpit showPersons={this.state.showPersons}
        persons={this.state.persons}
        clicked={this.togglePersonsHandler}
        />
        {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
