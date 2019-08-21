import React, { Component, PureComponent } from "react";
import Person from "./Person/Person";
//ако искаме просто да имаме един компонент, който да рендерира само негивете деца (за да са всички един до друг примерно) ползваме такъв тип компонент или може да се ползва React.Fragment, което е държавния wrapper
import Aux from "../../Hoc/Auxiliary";
import AuthContext from "../../Context/auth-context";

//Ако ще следя дали всички пропъртита няма да се променят тогава не е необходимо да се ползва shouldComponentUpdate, а просто може класа да екстендва PureComponent резултата ще е същия
//class Persons extends PureComponent
class Persons extends Component {
  // static getDerivedStateFromProps(props, state){
  //     console.log("Persons .js")
  //     return state;
  // }
  shouldComponentUpdate(nextProps, nextState) {
    console.log("[Persons.js] Should components update");
    if (nextProps.persons !== this.props.persons) {
      //по този начин можем да проверим дали реално има промяна и дали трябва да се рендерира целия компонент защото парент компонента му като има промяна ще рендерира и него
      return true;
    } else {
      return false;
    }
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    //тук ще се ъпдейтне когато потребителя скролне и може да се вземат координатите на скролера
    console.log("[Persons.js] getSnapShot");
    return null;
  }
  //когато се ъпдейтне нещо в компонента се извиква това и това ще се ползва много ВАЖНО!!!
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("[Persons.js] component did update");
    console.log(snapshot);
  }

  componentWillUnmount() {
    //тук след като се ънмаунтне компонента ще се изпълни това
  }
  render() {
      //обвивайки всичко в AuthContext.Consumer вече ще имаме достъп до контекста като го ползваме като обвием jsx-a във функция, която ще получи контекста
    return (
      <AuthContext.Consumer>
        {(context)=>this.props.persons.map((person, index) => {
          return (
            <Person
              key={person.id}
              name={person.name}
              age={person.age}
              click={() => this.props.clicked(index)}
              changed={event => this.props.changed(event, person.id)}
            />
          );
        })}
      </AuthContext.Consumer>
    );
  }
}

export default Persons;
