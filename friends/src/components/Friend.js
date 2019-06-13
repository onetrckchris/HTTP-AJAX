import React from 'react';
import styled from 'styled-components';
import { FriendInput } from './FriendForm';

const FriendCard = styled.div`
    border: 1px solid #dbdbdb;
    border-radius: 5px;
    display: flex;
    padding: 1rem;
    min-width: 25rem;
    margin: 25px;
    background-color: white;
`;

const FriendImg = styled.img`
    width: 120px;
    padding-right: 10px;
    height: 100%;
    border-right: 1px solid black;
`;

const FriendDetails = styled.div`
    padding-left: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    & * {
        margin: 0px;
        margin: 5px 0px;
    }
`;

const Friend = props => {
    return (
        <FriendCard>
            <FriendImg />
            <FriendDetails>
                <h4>{props.friend.name}</h4>
                <p>{props.friend.age}</p>
                <p>{props.friend.email}</p>
                <FriendInput updateButton type="submit" onClick={event => props.setUpdateForm(event, props.friend)} value="Update friend" />
            </FriendDetails>
        </FriendCard>
    )
}

export default Friend;