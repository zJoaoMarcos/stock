import styled from 'styled-components';
import { Form as Unform } from '@unform/web';

export const Container = styled.div`
    background-color: white;
    padding: 150px 30px;
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 100vw
`;

export const Title = styled.h1`
    color: #9c000d;
`;

export const Form = styled(Unform)`
    background-color: white;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border-radius: 10px;
    min-width: 450px;
    min-height: 400px;

    h2 {
        color: #9c000d;
    }

    Input {
        height: 30px;
        width: 350px;
        margin-bottom: 25px;
        border-radius: 8px;
        border-style: none;
    }

    button {
        height: 35px;
        width: 350px;
        border-radius: 8px;
        border-style: none;
        background-color:#9c000d;
        color: white;
    }
`;
