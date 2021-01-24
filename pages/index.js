import React, { useState } from 'react';
import Barra_nav from '../components/barra_nav'
import Enero from '../components/enero_2021'
import Febrero from '../components/febrero_2021'
import Marzo from '../components/marzo_2021'
import Abril from '../components/abril_2021'
import Mayo from '../components/mayo_2021'
import Junio from '../components/junio_2021'
import Julio from '../components/julio_2021'
import Agosto from '../components/agosto_2021'
import Septiembre from '../components/septiembre_2021'
import Octubre from '../components/octubre_2021'
import Noviembre from '../components/noviembre_2021'
import Diciembre from '../components/diciembre_2021'
import Footer from '../components/footer'

export default function Home() {

  const [dato, saveDato ] = useState('');

  return (
    <>
      <Barra_nav saveDato = {saveDato}/>
      <div>
        <Enero />
        <Febrero />
        <Marzo />
        <Abril />
        <Mayo />
        <Junio />
        <Julio />
        <Agosto />
        <Septiembre />
        <Octubre />
        <Noviembre />
        <Diciembre />
      </div>
      <Footer dato={dato}/>
    </>
  )
}
