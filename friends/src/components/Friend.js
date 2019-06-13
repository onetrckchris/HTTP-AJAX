import React from 'react';
import styled from 'styled-components';

const FriendWrapper = styled.div`
    border: 1px solid #dbdbdb;
    border-radius: 5px;
    padding: 1rem;
    min-width: 25rem;
    margin: 25px;
    background-color: white;
`;

const Friend = ({ friends, match, setUpdateForm }) => {
    const { id } = match.params;
    const friend = friends.find(friend => `${friend.id}` === id);

    if(!friend) {
        return <h3>Loading friends...</h3>
    }

    return (
        <FriendWrapper>

        </FriendWrapper>
    )
}

export default Friend;