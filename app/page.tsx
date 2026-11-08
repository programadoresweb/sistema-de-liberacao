'use client'
import { useState } from 'react';
import Cabecario from './components/Cabecario';
import Teclado from './components/Teclado'
export default function Home() {
    const [timble,setTimble] = useState('nord')
    const [tom,setTom] = useState ('c')
  
  return (
    <div>
      <Cabecario timble={timble} setTimble={setTimble} tom={tom} setTom={setTom}/>
      <main>
        <Teclado timble={timble} tom={tom}/>
      </main>
    </div>
  )
}

    
  