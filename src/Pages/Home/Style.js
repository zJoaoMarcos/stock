import styled from "styled-components";

export const Container = styled.div`
    background-color: white;
    padding: 140px 30px;
    display: flex;
    align-items: center;
    flex-direction: column;
`;

export const Options = styled.div`
    justify-content: space-evenly;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center; 
    justify-content: center; 
    width: 33%;
    height: 350px;

    button {
        margin-bottom: 10px;
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

export const Title = styled.h2`
    text-align: center;
    font-size: 1.9em;
`;