import React from 'react';
import styled from '@emotion/styled';

const Cal = styled.div`
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.25);
  -moz-box-shadow:0px 3px 3px rgba(0, 0, 0, 0.25); 
  -webkit-box-shadow:0px 3px 3px rgba(0, 0, 0, 0.25); 
  margin:50px auto; 
  font: 13px/1.5 "Helvetica Neue", Helvatica, Arial, san-serif; 
  display:table;
`

const Header_cal = styled.div`
  cursor:default; 
  background: #cd310d; 
  background: linear-gradient(top, #b32b0c, #cd310d); 
  height: 34px; 
  position: relative; 
  color:#fff;
  border-top-left-radius: 5px; 
  border-top-right-radius: 5px; 
  font-weight:bold; 
  text-shadow:0px -1px 0 #87260C; 
  text-transform: uppercase; 
`
const Title_month = styled.h3`
  display: flex;
  justify-content: center;
  padding-top: 3%;
`

const Table_days = styled.table`
  background:#fff; 
  font-weight: 1000;
`

const Days = styled.td`
  color:#2b2b2b; 
  width:30px; 
  height:30px; 
  line-height:30px; 
  text-align:center; 
  border:1px solid #e6e6e6; 
  cursor:default; 
  text-transform:uppercase; 
  font-size:80%; 
  color:#9e9e9e; 
`

const Cal_frame = styled.div`
  background:#ededed; 
  color:#8c8c8c; 
  box-shadow:1px 1px 0px #fff inset; 
`
const Curr = styled.table`
  float: left;
  background-color: white;
  font-weight: 1000;
`

const Days_number = styled.td`
  color:#2b2b2b; 
  width:30px; 
  height:30px; 
  line-height:30px; 
  text-align:center; 
  border:1px solid #e6e6e6; 
  cursor:default; 
  font-size:80%; 
  position:relative; 
`

const Marzo = () => {
  return ( 
    <Cal>
      <Header_cal>
        <Title_month> Marzo 2021 </Title_month> 
      </Header_cal>
      <Table_days>
        <tbody>
          <tr>
            <Days>Dom</Days> 
            <Days>Lun</Days> 
            <Days>Mar</Days> 
            <Days>Mie</Days> 
            <Days>Jue</Days> 
            <Days>Vie</Days> 
            <Days>Sab</Days>
          </tr>
        </tbody>
      </Table_days>
      <Cal_frame>
        <Curr> 
          <tbody> 
            <tr><Days_number></Days_number><Days_number style={{backgroundColor: 'yellowgreen'}}>1</Days_number><Days_number style={{backgroundColor: 'yellow'}}>2</Days_number><Days_number style={{backgroundColor: 'yellow'}}>3</Days_number><Days_number style={{backgroundColor: 'pink'}}>4</Days_number><Days_number style={{backgroundColor: 'pink'}}>5</Days_number><Days_number style={{backgroundColor: 'yellowgreen'}}>6</Days_number></tr> 
            <tr><Days_number style={{border: '2px solid red', backgroundColor: 'yellowgreen'}}>7</Days_number><Days_number style={{backgroundColor: 'yellow'}}>8</Days_number><Days_number style={{backgroundColor: 'yellow'}}>9</Days_number><Days_number style={{backgroundColor: 'pink'}}>10</Days_number><Days_number style={{backgroundColor: 'pink'}}>11</Days_number><Days_number style={{backgroundColor: 'yellowgreen'}}>12</Days_number><Days_number style={{backgroundColor: 'yellowgreen'}}>13</Days_number></tr> 
            <tr><Days_number style={{border: '2px solid red', backgroundColor: 'yellow'}}>14</Days_number><Days_number style={{backgroundColor: 'yellow'}}>15</Days_number><Days_number style={{backgroundColor: 'pink'}}>16</Days_number><Days_number style={{backgroundColor: 'pink'}}>17</Days_number><Days_number style={{backgroundColor: 'yellowgreen'}}>18</Days_number><Days_number style={{backgroundColor: 'yellowgreen'}}>19</Days_number><Days_number style={{backgroundColor: 'yellow'}}>20</Days_number></tr> 
            <tr><Days_number style={{border: '2px solid red', backgroundColor: 'yellow'}}>21</Days_number><Days_number style={{border: '2px solid red', backgroundColor: 'pink'}}>22</Days_number><Days_number style={{backgroundColor: 'pink'}}>23</Days_number><Days_number style={{backgroundColor: 'yellowgreen'}}>24</Days_number><Days_number style={{backgroundColor: 'yellowgreen'}}>25</Days_number><Days_number style={{backgroundColor: 'yellow'}}>26</Days_number><Days_number style={{backgroundColor: 'yellow'}}>27</Days_number></tr> 
            <tr><Days_number style={{border: '2px solid red', backgroundColor: 'pink'}}>28</Days_number><Days_number style={{backgroundColor: 'pink'}}>29</Days_number><Days_number style={{backgroundColor: 'yellowgreen'}}>30</Days_number><Days_number style={{backgroundColor: 'yellowgreen'}}>31</Days_number><Days_number></Days_number><Days_number></Days_number><Days_number></Days_number></tr>
          </tbody> 
        </Curr>
      </Cal_frame>
    </Cal>
   );
}
 
export default Marzo;