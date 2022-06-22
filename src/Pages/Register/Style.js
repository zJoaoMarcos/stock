import styled from "styled-components";
import { Form as Unform } from '@unform/web';

export const Container = styled.div`
    background-color: white;
    display: flex;
    align-items: center;
    flex-direction: column;
`;

export const Form = styled(Unform)`
    margin: 140px 30px;
    background-color: white;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-evenly;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border-radius: 10px;
    width: 33%;
    height: 425px;

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
        margin-bottom: 10px;
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