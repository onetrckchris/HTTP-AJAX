import React from 'react';
import styled, { css } from 'styled-components';
import uuid from 'uuid';

const Form = styled.form`
    background-color: white;
    width: 15rem;
    display: flex;
    flex-direction: column;
    padding: 20px;
    margin: auto;
    margin-top: 25px;
    border: 1px solid #dbdbdb;
    border-radius: 5px;

    & h1 {
        margin-top: 0px;
    }
`;

export const FriendInput = styled.input`
    height: 1.5rem;
    padding: 5px;
    font-size: 1.1rem;
    border: 1px solid #dbdbdb;
    margin-bottom: 10px;
    border-radius: 5px;
    outline: none;

    ${props => props.addButton && css`
        height: 2rem;     

        &:hover {
            background-color: #dbdbdb;
            color: white;
            cursor: pointer;
        }
    `}

    ${props => props.updateButton && css`
        font-size: 0.8rem;

        &:hover {
            background-color: #dbdbdb;
            color: white;
            cursor: pointer;
        }
    `}
`;

class FriendForm extends React.Component {
    // Apparently you don't need the constructor to pass props down. This does the trick.
    state = {
        name: '',
        age: '',
        email: '',
    }

    onInputChange = event => {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleSubmit = event => {
        event.preventDefault();
        
        const newFriend = {
            id: uuid.v4(),
            name: this.state.name,
            age: this.state.age,
            email: this.state.email
        }

        this.setState({
            name: '',
            age: '',
            email: ''
        })
        
        this.props.addFriend(newFriend);

        console.log(newFriend)
    }

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <h1>Add a friend!</h1>
                <FriendInput type="text" placeholder="name" name="name" value={this.state.name} onChange={this.onInputChange} />
                <FriendInput type="number" placeholder="age" name="age" value={this.state.age} onChange={this.onInputChange} />
                <FriendInput type="email" placeholder="email" name="email" value={this.state.email} onChange={this.onInputChange} />
                <FriendInput addButton type="submit" value="Add a friend" />
            </Form>
        )
    }
}

export default FriendForm;