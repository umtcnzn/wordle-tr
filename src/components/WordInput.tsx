import React from 'react'
import { useGameContext } from '../context/GameContext'

function WordInput({word,isActive}:{word:string,isActive:boolean}) {

  const {gameStats} = useGameContext();

  const answer = gameStats?.solution.toLocaleUpperCase("tr")! || "";

  return (
    <div className='flex flex-row gap-1 text-[25px] font-black'>
      {Array.from({length:5}).map((_,idx)=>{
        return (isActive ? 
        <div key={idx} className='kbd bg-white text-black'>
          {word.at(idx)}
        </div> 
        :
        <div key={idx} className={`kbd text-white ${word===""?"bg-white":word.at(idx) === answer.at(idx)? 'bg-green-700':answer.includes(word.at(idx)!)?'bg-yellow-200':'bg-neutral-500'}`}>
          {word.at(idx)}
        </div>)
      })}
    </div>
  )
}

export default WordInput