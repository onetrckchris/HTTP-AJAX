import React from 'react';
import styled from 'styled-components';

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
    width: 33%;
    padding-right: 10px;
    height: 100px;
    border-right: 1px solid black;
`;

const FriendDetails = styled.div`
    padding-left: 10px;

    & * {
        margin: 0px;
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
            </FriendDetails>
        </FriendCard>
    )
}

export default Friend;