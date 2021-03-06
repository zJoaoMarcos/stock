import styled from 'styled-components';
import { Form as Unform } from '@unform/web';

export const Container = styled.div`
    background: no-repeat center/100% url("https://www.shutterstock.com/es/image-illustration/digital-network-technology-futuristic-theme-illustration-1921366172");
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 100vh;
    `;

export const Title = styled.h1`
    padding-top: 10%;
    color: #9c000d;
    font-size: 1.9em;
`;

export const Form = styled(Unform)`
    background-color: white;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-evenly;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border-radius: 10px;
    width: 33%;
    height: 350px;

    h2 {
        color: #9c000d;
        font-size: 1.6em;
    }

    Input {
        height: 30px;
        width: 80%;
        margin-bottom: 25px;
        font-size: 1em;
        border: none;
        border-bottom: 2px solid #9c000d;
        @media(max-width: 768px) {
            width: 80%;
        }
    }

    Input:focus {
        outline: none;
        border-bottom: 2px solid #9c000d;
    }

    Input::placeholder {
        font-size: 1em;
    }

    button {
        height: 40px;
        width: 80%;
        border-radius: 10px;
        border-style: none;
        background-color: #9c000d;
        color: white;
        font-size: 1.2em;
        @media(max-width: 768px) {
            width: 80%;
        }
    }

    button:hover {
        background-color: #7d000a;
    }

    button:active {
        font-weight: 700;
        background-color: #9c000d;
        
    } 

    @media(max-width: 768px) {
        width: 100%;
    }
`;
