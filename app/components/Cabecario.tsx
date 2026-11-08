'use client'
import {useState} from 'react';

interface timbleProps {
   timble: string;
  setTimble: (value: string) => void;
  tom:string;
  setTom:(value:string) => void
}



export default function Cabecario({timble,setTimble,tom,setTom}:timbleProps) {

  return (
    <header className="bg-red-600 text-white p-4 grid grid-cols-3">
      <h1 className="text-xl font-bold">Teclado Online</h1>
      
      <div className='text-xl font-semibold hover:text-red-100 active:text-red-600'>
        <select name="timble" id="timble" value={timble} onChange={(e)=>setTimble(e.target.value)}>
          <option value="nord">Nord</option>
          <option value="yamaha">Yamaha</option>
          <option value="cassio">Cassio</option>
        </select>
      </div>

      <div className='text-xl font-semibold hover:text-red-100 active:text-red-600'>
        <select name="tom" id="tom" value={tom} onChange={(e)=>setTom(e.target.value)}>
          <option value="c">C</option>
          <option value="cs">C#</option>
          <option value="d">D</option>
          <option value="d">D#</option>
          <option value="e">E#</option>
          <option value="f">f</option>
          <option value="fs">F#</option>
          <option value="g">G</option>
          <option value="gs">G#</option>
          <option value="a">A</option>
          <option value="as">A#</option>
          <option value="b">B</option>
        </select>
      </div>
      
    </header>
  );
}