import React from 'react';
import styled from 'styled-components';
import {BoxArrowUpRightIcon} from "../Icons/Icons";

const BannerContainer = styled.div`
    background-color: var(--orange);
    color: var(--black);
    padding: 30px 2vw;
    text-align: center;
    margin-bottom: 40px;
`;

const Title = styled.h1`
    font-size: 2em;
    color: var(--black);
    margin-bottom: 20px;
`;

const Description = styled.p`
    color: var(--black);
    font-size: 1em;
    margin-bottom: 20px;
`;

const Button = styled.button`
    background-color: var(--black);
    color: var(--font-primary);
    padding: 10px 30px;
    font-size: 1em;
    border: none;
    border-radius: 100px;
    cursor: pointer;
    display: flex;
    gap: 10px;
    margin: 0 auto;
`;

/* I'm using props to make the component even more dynamic for customizing the text */
const Banner = (props) => {
    return (
        <BannerContainer>
            <Title>{props.title}</Title>
            <Description>{props.description}</Description>
            <Button>{props.button} <BoxArrowUpRightIcon/></Button>
        </BannerContainer>
    );
};

export default Banner;
