import styled from 'styled-components';

export const Button = styled.button`
    width: 70vw;
    height: 50px;
    background: linear-gradient(217deg, hsl(176, 68%, 64%), hsl(198, 60%, 50%));
    border: none;
    border-radius: 25px;
    color: white;
    font-family: inherit;
    font-weight: 700;
    margin-bottom: 15px;
    @media screen and (min-width: 500px) {
        max-width: 250px;
        display: inline;
    }
`
