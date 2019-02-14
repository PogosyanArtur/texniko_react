import React from 'react'
import styled from 'styled-components'
import TopLine from '../TopLine'

const Container = styled.header`
    background-color: ${( { theme } ) => theme.palette.primary.main };
    height: ${( { theme } ) => theme.spacing.unit * 8 }px;
    margin: 0;
    padding: 0;

    ${( { theme } ) => theme.media.up.md`
        height: ${( { theme } ) => theme.spacing.unit * 100 }px;
    `};    
`;

const Header = () => {
    return (
        <Container>
            <TopLine />
        </Container>
    )
}

export default Header
