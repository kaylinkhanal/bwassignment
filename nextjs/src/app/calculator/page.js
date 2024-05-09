'use client'
import React,{useState} from 'react'

const page = () => {
    const [output, setOutput] = useState('')
    const calculatorKeys = [
        ['C','<-','%', '/'],
        ['7','8','9', '*'],
        ['4','5','6', '-'],
        ['1','2','3', '+'],
        ['+/-','0','.', '='],
        [ '(',')', '√x']
    ]
    const colorConfig = {
      orangeKeys:  ['C', '=' ],
      crimsonKeys: ['<-','%','/','*','-','+']
    }

    const symbols = ['/','*','-','+','<-','%','C', '=','+/-' ]

    const handleClick = (keys)=> {
        debugger;
        const removeLastChar = output.slice(0,output.length-1)
      if(keys === 'C'){
        setOutput('')
      }else if(keys === '='){
        const result = eval(output)
        setOutput(result.toString())
      }else if(keys==='<-'){
          setOutput(removeLastChar)
      }else if(keys == '+/-'){
        setOutput((-output).toString())
      }else if(keys == '√x'){
        const sqrRoot = Math.sqrt(output)
        setOutput(sqrRoot.toString())
      }
      else{
        const result = output[output.length -1]
        if(symbols.includes(result) && Number.isNaN(Number(keys))){
          const newVal = removeLastChar+ keys
          setOutput(newVal)
          return;
        }
        setOutput(output +keys)
        }
      }


  return (
    <div className='bg-black'>
      <div className='text-white text-3xl'>
        {output}
      </div>
   {
    calculatorKeys.map((item)=>{
           return (
            <div className='flex'>
                { 
                item.map((keys)=>{
                    return <div 
                      onClick={()=>handleClick(keys)}
                      style={{
                        backgroundColor: colorConfig.orangeKeys.includes(keys) ? 'orange': 'white',
                        color: colorConfig.crimsonKeys.includes(keys) ? 'orange': 'black',
                    }}
                     className='p-2 m-2 w-8 shadow-lg bg-white rounded-lg'>{keys}</div>
                     })
                }
            </div>
           )
        })}


   
    </div>
  )
}

export default page