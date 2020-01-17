import React from 'react';
import styled from 'styled-components';

import './Person.css';

const StyledDiv = styled.div`
    width: 60%;
    margin: 16px auto;
    border: 1px solid #eee;
    box-shadow: 0 2px 3px #ccc;
    padding: 16px;
    text-align: center;

    @media (min-width: 500px) {
        width: 450px;
    }
`;

const Person = (props) => {
    const { name, age, children } = props;
    return (
        // <div className="Person">
        <StyledDiv>
            <p onClick={props.click}>I'm {name} and I'm {age} years old!</p>
            <p>{children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </StyledDiv>
    )
}

export default Person;
