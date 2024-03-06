import { createContext, useContext, useState } from "react";
import { GameStatsType } from "../types/stats.type";
import { getRandomWord } from "../utils/getandCheckWords";

type GameContextType = {
    gameStats:GameStatsType,
    handleGameStats: (newGameStats:GameStatsType) => void,
    resetGameStats: () => void,
}

const defaultValues = {
    gameStats:{solution:"",guesses:[],gameStatus:"",rowIndex:0},
    handleGameStats:()=>{},
    resetGameStats:()=>{}
}


const initalGameStats = {
    guesses:["","","","","",""],rowIndex:0,gameStatus:"CONTINUE",solution:getRandomWord(),
}


const GameContext = createContext<GameContextType>(defaultValues);

export function useGameContext(){
    return useContext(GameContext);
}


export const GameContextProvider = ({children}:{children:React.ReactNode}) => {

    const [gameStats,setGameStats] = useState<GameStatsType>(JSON.parse(localStorage.getItem("gameStats")!) || null);

    const handleGameStats = (newGameStats:GameStatsType) => {
        setGameStats(newGameStats);
        localStorage.setItem("gameStats",JSON.stringify(newGameStats));
    }

    const resetGameStats = () => {
        const newGameStats = {...initalGameStats,solution:getRandomWord()}
        setGameStats(newGameStats);
        localStorage.setItem("gameStats",JSON.stringify(newGameStats));
    }

    return <GameContext.Provider value={{gameStats,handleGameStats,resetGameStats}}>
        {children}
    </GameContext.Provider>
}