import styled from "styled-components";

export const Header = styled.div`
    padding: 50px 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 80%;

    button {
        font-size: 1.2em;
        border-style: none;
        outline: none;
        background-color: transparent;
    }

    button:hover {
        cursor: pointer;
        font-weight: 600;
    }

    button:active {
        color: #9c000d;
    }
`;