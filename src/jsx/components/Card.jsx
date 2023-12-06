import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
    background-color: var(--card);
    padding: 10px;
    width: 280px;
    max-width: 100%;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

const Cover = styled.img`
    color: var(--black);
    object-fit: cover;
    width: 100%;
    aspect-ratio:1/1;
    margin-bottom: 20px;
    border-radius: 10px;
`;

const SongName = styled.h2`
    font-size: 20px;
    color: var(--font-primary);
    margin-bottom: 20px;
`;

const SingerOrBand = styled.p`
    color: var(--font-secondary);
    font-size: 16px;
    margin-bottom: 20px;
`;

/* I'm using props to make the component even more dynamic for customizing the text */
const Card = (props) => {
    return (
        <CardContainer>
            <Cover src={props.cover}></Cover>
            <SongName>{props.song}</SongName>
            <SingerOrBand>{props.artist}</SingerOrBand>
        </CardContainer>
    );
};

export default Card;
