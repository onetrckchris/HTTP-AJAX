import React from 'react';
import styled from 'styled-components';

import Friend from './Friend';

const FriendsContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`;

const Friends = props => {
    return (
        <FriendsContainer>
            {props.friends.map(friend => (
                <Friend 
                    key={friend.id} 
                    friend={friend} 
                    setUpdateForm={props.setUpdateForm}
                />
            ))}
        </FriendsContainer>
    )
}

export default Friends;