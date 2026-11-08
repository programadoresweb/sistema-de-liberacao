'use client'
interface timbleProps{
    timble:string
    tom:string
}
export default function Teclado ({timble,tom}:timbleProps) {
    
 
    return (
        <div>
            <p>{timble !== '' && timble}</p>
            <p>{tom !== '' && tom}</p>
            
        </div>
    )
}