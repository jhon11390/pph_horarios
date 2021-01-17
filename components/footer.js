import React from 'react';
import styled from '@emotion/styled';

const Footer_pages = styled.footer`
  width: 100%;
  height: 60px;
  position: fixed;
  bottom: 0px;
  background-color: white;
  z-index: 2;
  display: flex;
  justify-content: space-around;
`
const Colors_turnos = styled.div`
  width: 20px;
  height: 20px;
  background-color: black;
`

const Footer = () => {
  return ( 
    <Footer_pages>
      <Colors_turnos></Colors_turnos>
      <Colors_turnos></Colors_turnos>
      <Colors_turnos></Colors_turnos>
    </Footer_pages>
   );
}
 
export default Footer;