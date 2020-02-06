import React from 'react';

import classes from './Person.css';

const Person = (props) => {
    console.log('[Person.js] renderring...');
    const { name, age, children } = props;
    return (
        <div className={classes.Person}>
            <p onClick={props.click}>I'm {name} and I'm {age} years old!</p>
            <p>{children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
    )
}

export default Person;
