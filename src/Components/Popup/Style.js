import styled from "styled-components";
import { Form as Unform } from '@unform/web';

export const Form = styled(Unform)`
    background-color: white;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-evenly;
    border-radius: 10px;
    width: 100%;
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

    Select {
        height: 30px;
        width: 170px;
        margin-bottom: 25px;
        font-size: 1em;
        border: none;
        border-bottom: 2px solid #9c000d;
        @media(max-width: 768px) {
            width: 80%;
        }
    }

    Select:focus {
        outline: none;
        border-bottom: 2px solid #9c000d;
    }

    Select::placeholder {
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