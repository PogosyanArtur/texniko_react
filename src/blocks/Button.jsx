import styled from 'styled-components'
import { applyStyleModifiers } from 'styled-components-modifiers';

const ButtonModifiers = {

}

export const Button = styled.button`
    text-transform: none;
    text-indent: 0px;
    text-shadow: none;
    text-rendering: auto;    
    word-spacing: normal;
    cursor: pointer;    
    border-width: 0;
    border-style: outset;
    border-color: inherit;
    border-image: none;
    font-family:inherit;
    text-decoration: none;
    line-height:1;
    color: inherit;
    background-color: inherit;
    display: inline-flex;
    align-items:center;
    justify-content:center;
    box-sizing: border-box;
    letter-spacing: normal;
    margin: 0;
    padding: 0;
    
    ${applyStyleModifiers(ButtonModifiers)}; 
`
