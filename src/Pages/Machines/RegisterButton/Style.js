import styled from "styled-components";
import { Form as Unform } from '@unform/web';

export const Form = styled(Unform)`
    background-color: white;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: space-evenly;
    width: 500px;
    height: 720px;

    h2 {
        color: #9c000d;
        font-size: 1.6em;
    }

    Input {
        height: 30px;
        width: 100%;
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

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
    -webkit-appearance: none;
     margin: 0;
    }

    Select {
        height: 30px;
        width: 31.1em;
        margin-bottom: 25px;
        font-size: 1em;
        border: none;
        border-bottom: 2px solid #9c000d;
        
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
        width: 100%;
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
        cursor: pointer;
    }

    button:active {
        font-weight: 700;
        background-color: #9c000d;
        
    } 

    @media(max-width: 768px) {
        width: 100%;
    }
`;