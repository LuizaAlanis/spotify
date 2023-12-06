import React from 'react';
import styled from 'styled-components';
import {SpotifyIcon} from '../Icons/Icons';
import Picture from '../../image/profile/people.jpg'

const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    color: var(--green);
    font-size: 1.6em;
    margin-bottom: 20px;
`;

const ProfilePicture = styled.img`
    width: 30px;
    height: 30px;
    border-radius: 100px;
    background-color: var(--font-primary);
    background-size: cover;
    background-position: center;
    object-fit: cover;
`;

const Header = () => {
    return (
        <HeaderContainer>
           <SpotifyIcon/>
            <ProfilePicture src={Picture}/>
        </HeaderContainer>
    );
};

export default Header;
