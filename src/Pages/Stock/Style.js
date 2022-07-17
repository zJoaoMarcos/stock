import styled from "styled-components";

export const Container = styled.div`
    background-color: white;
    display: flex;
    align-items: center;
    flex-direction: column;
`;

export const Button = styled.button`
    display:flex;
    flex-direction:center;
    justify-content: center;
    align-items: center;
    margin-left: 37%; 
    height: 40px;
    width: 100px;
    border-radius: 10px;
    border-style: none;
    background-color: transparent;
    color: black;
    font-size: 1.2em;
    margin-bottom: 10px;
    @media(max-width: 768px) {
        width: 80%;
    }
    &:hover {
        cursor: pointer;
        font-weight: 700;
    }
`;