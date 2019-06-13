import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const FriendsContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`;

const StyledFriendLink = styled(NavLink)`
    color: black;
    text-decoration: none;
    border: 1px solid #dbdbdb;
    border-radius: 5px;
    padding: 1rem;
    min-width: 25rem;
    margin: 25px;
    background-color: white;
`;

const Friends = props => {
    return (
        <FriendsContainer>
            {props.friends.map(friend => (
                <StyledFriendLink to={`/friends/${friend.id}`} key={friend.id}>
                    <p>Name: {friend.name}</p>
                    <p>Age: {friend.age}</p>
                    <p>Email: {friend.email}</p>
                </StyledFriendLink>
            ))}
        </FriendsContainer>
    )
}

export default Friends;