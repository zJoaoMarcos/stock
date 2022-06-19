import styled from 'styled-components';
import { Form as Unform } from '@unform/web';

export const Container = styled.div`
    background-color: #ccc;
    padding: 30px 70px;
    display: flex;
    align-items: center;
    flex-direction: column;
`;

export const Title = styled.h1`
    color: red;
`;

export const Form = styled(Unform)`
    background-color: red;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 100px;

    Input {
        height: 45px;
        width: 240px;
        margin-bottom: 25px
    }

    button {
        height: 45px;
        width: 250px;
    }
`;
