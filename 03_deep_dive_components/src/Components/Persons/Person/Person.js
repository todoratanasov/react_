import React, { Component } from "react";
import AuthContext from "../../../Context/auth-context";
import "./Person.css";

class Person extends Component {
  constructor(props) {
    super(props);
    //this.inputElementRef = React.createRef();
    //другия начин за ползване на ref
    this.inputElementRef.current.focus(); //това ще хване current елемента
  }
  //За да може да се ползва контекста не само в jsx-a се прави следното, но точно по същия начих, за да може react да изпълни този метод
  static contextType = AuthContext;

  componentDidMount() {
    //защото сме създали в самия елемент референция към него тук можем да си го ползваме
    this.inputElement.focus();
    //тъй като сме си задали горе contextType static метода вече имаме в целия клас достъп до context, който в случая е създадения от нас контекст в AuthContext
    console.log(this.context.login);
  }

  render() {
    //ref={(inputEl)=>{this.inputElement=inputEl}} по този начин създаваме референция към този елемент и го присвояваме на inputElement и можем да си ползваме директно елемента където си искаме
    //има го и другия вариант да се ползва Ref като в конструктора се създаде променлива, която подаваме на елемента така - ref={this.inputElementRef} и позваме inputElementRef
    return (
      // другия начин да ползваме context е просто {this.context....} защото по-горе със статичен метод сме казали на react, че искаме да го ползваме в context в този клас
      //използвайки AuthContext.Consumer си обвиваме целия jsx в {и във функция, която получава контекста} и го ползваме с context.пропъртито, което искаме да достъпим
      <AuthContext.Consumer>
        {context => (
          <div className="Person">
            <p onClick={this.props.click}>
              I'm {this.props.name} and I am {this.props.age} years old!
            </p>
            <p>{this.props.children}</p>
            <input
              type="text"
              //ref={(inputEl)=>{this.inputElement=inputEl}}
              ref={this.inputElementRef}
              key="i3"
              onChange={this.props.changed}
              value={this.props.name}
            />
          </div>
        )}
      </AuthContext.Consumer>
    );
  }
}

export default Person;
