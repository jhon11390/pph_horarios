import React from 'react';
import styled from '@emotion/styled';

const Nav_barra = styled.nav`
  width: 100%;
  height: 60px;
  position: fixed;
  top: 0;
  background-color: white;
  z-index: 2;
  display: flex;
  justify-content: center;
`
const Title = styled.h1`
  padding: 0;
`

const Barra_nav = () => {
  return ( 
    <Nav_barra>
      <Title>Calendario 2021</Title>
    </Nav_barra>
   );
}
 
export default Barra_nav;