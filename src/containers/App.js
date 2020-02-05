import React, { Component } from 'react';

import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

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
    let persons = null;

    if (this.state.showPersons) {
      persons = <Persons
                  persons={this.state.persons}
                  clicked={this.deletePersonHandler}
                  changed={this.nameChangedHandler}/>;
    }

    return (
      <div className={classes.App}>
        <Cockpit
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler}/>
        {persons}
      </div>
    );
  }
}

export default App;
