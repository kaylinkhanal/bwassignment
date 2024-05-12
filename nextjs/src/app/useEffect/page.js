'use client'
import React, {useEffect, useState} from 'react'

const page = () => {
    const lotteryNumbers = [4123,4225,2332,4332,4352,3215,32345, 32156, 23231]
    const [lotteryWinnerNumber, setLotteryWinnerNumber] = useState(null)

    useEffect(() => {
        setTimeout(() => {
            const randomNum=  Math.round(Math.random()*lotteryNumbers.length-1)
            const winNumber = lotteryNumbers[randomNum]
            if(winNumber ===  lotteryWinnerNumber){
                setLotteryWinnerNumber(winNumber+1)
            }else{
                setLotteryWinnerNumber(winNumber)
            }
        }, 200);
      },[lotteryWinnerNumber]);
  return (
    <>
       <div style={{backgroundColor:'red' ,width:60+'px', padding:10+'px'}}>
                  {lotteryWinnerNumber}
          </div>
          <button className='border border-gray-500 m-2'>Stop</button>
    </>
  )
}

export default page