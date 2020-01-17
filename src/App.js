import React, { Component } from 'react';

import './App.css';
import Person from './Person/Person';

class App extends Component {
  // const [ personsState, setPersonsState ] = useState({
  //   persons: [
  //     { name: 'Max', age: 28 },
  //     { name: 'Manu', age: 29 },
  //     { name: 'Stephenie', age: 26 }
  //   ],
  //   otherState: 'some other value'
  // });

  // const switchNameHandler = () => {
  //   setPersonsState({
  //     persons: [
  //       { name: 'An Duong', age: 31 },
  //       { name: 'Manu', age: 29 },
  //       { name: 'Stephenie', age: 26 }
  //     ]
  //   });
  // }

  state = {
    persons: [
          { id: 'sdf', name: 'Max', age: 28 },
          { id: 'gfg', name: 'Manu', age: 29 },
          { id: 'ghh', name: 'Stephenie', age: 26 }
        ],
        otherState: 'some other value',
        showPersons: false
  };

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 18 },
        { name: 'Elly', age: 23 },
        { name: 'Stephenie', age: 26 }
      ]
    });
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => p.id === id);
    const person = {...this.state.persons[personIndex]};
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons;
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  }

  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
                      name={person.name}
                      age={person.age}
                      click={() => this.deletePersonHandler(index)}
                      key={person.id}
                      changed={(event) => this.nameChangedHandler(event, person.id)} />;
          })}
        </div>
      );

      // style.backgroundColor = 'red';
      // style[':hover'] = {
      //   backgroundColor: 'salmon',
      //   color: 'black'
      // };
    }

    let classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red');
    }

    if (this.state.persons.length <= 1) {
      classes.push('bold');
    }

    return (
      <div className="App">
        <h1>Hi, I'm React App</h1>
        <p className={classes.join(' ')}>Nice to meet you</p>
        <button
          className="button"
          onClick={this.togglePersonsHandler}>
          Toggle Persons
        </button>
          {persons}
      </div>
    );
  }
}

export default App;
