import React from 'react';
import styled, { css } from 'styled-components';

const Form = styled.form`
    background-color: white;
    width: 15rem;
    display: flex;
    flex-direction: column;
    padding: 20px;
    border: 1px solid #dbdbdb;
    border-radius: 5px;
    margin: 25px 15px 0px 15px;

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

class UpdateForm extends React.Component {
    // Apparently you don't need the constructor to pass props down. This does the trick.
    state = {
        friend: this.props.activeFriend
    }

    onInputChange = event => {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleSubmit = event => {
        
    }

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <h1>Update a friend!</h1>
                <FriendInput type="text" placeholder="name" name="name" value={this.state.name} onChange={this.onInputChange} />
                <FriendInput type="number" placeholder="age" name="age" value={this.state.age} onChange={this.onInputChange} />
                <FriendInput type="email" placeholder="email" name="email" value={this.state.email} onChange={this.onInputChange} />
                <FriendInput addButton type="submit" value="Update a friend" />
            </Form>
        )
    }
}

export default UpdateForm;