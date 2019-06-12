import React from 'react';
import styled, { css } from 'styled-components';

const Form = styled.form`
    background-color: white;
    width: 15rem;
    display: flex;
    flex-direction: column;
    padding: 20px;
    margin: auto;
    border: 1px solid #dbdbdb;
    border-radius: 5px;
    margin-top: 25px;

    & h1 {
        margin-top: 0px;
    }
`;

const FriendInput = styled.input`
    height: 1.5rem;
    padding: 5px;
    font-size: 1.1rem;
    border: 1px solid #dbdbdb;
    margin-bottom: 10px;
    border-radius: 5px;
    outline: none;

    ${props => props.button && css`
        height: 2rem;
        
        &:hover {
            background-color: #dbdbdb;
            color: white;
            height: 2rem;
            cursor: pointer;
        }
    `}
`;

const FriendForm = props => {
    return (
        <Form onSubmit={props.addFriend}>
            <h1>Add a friend!</h1>
            <FriendInput type="text" placeholder="name" name="name" onChange={props.onInputChange} />
            <FriendInput type="number" placeholder="age" name="age" onChange={props.onInputChange} />
            <FriendInput type="email" placeholder="email" name="email" onChange={props.onInputChange} />
            <FriendInput button type="submit" value="Add a friend" />
        </Form>
    )
}

export default FriendForm;