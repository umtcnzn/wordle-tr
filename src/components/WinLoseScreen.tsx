import { useGameContext } from '../context/GameContext';

function WinLoseScreen({restartGame}:{restartGame:()=>void}) {

  const {gameStats} = useGameContext();

  if(gameStats?.gameStatus === "WIN"){
    return (
        <div className='flex justify-center items-center fixed top-0 bottom-0 right-0 left-0 bg-black/[.5]'>
            <div className="modal-box w-1/8 bg-green-100">
                <h3 className="font-bold text-lg flex justify-center">Tebrikler!!!</h3>
                <p className="py-4">{gameStats?.rowIndex} denemede doğru cevabı buldunuz.</p>
                <div className='flex justify-end pt-4'>
                    <button onClick={()=> restartGame()} className='btn btn-success'>Yeniden Oyna</button>
                </div>
            </div> 
        </div>
    )
  }
  else if(gameStats?.gameStatus === "LOSE"){
    return (
      <div className='flex justify-center items-center fixed top-0 bottom-0 right-0 left-0 bg-black/[.5]'>
        <div className="modal-box w-1/8 bg-red-100">
            <h3 className="font-bold text-lg flex justify-center">Kaybettiniz!!!</h3>
            <p className="py-4">Doğru cevap '{gameStats.solution}' ydı.</p>
            <div className='flex justify-end pt-4'>
                <button onClick={()=> restartGame()} className='btn btn-success'>Yeniden Oyna</button>
            </div>
        </div> 
    </div>
    )
  }
  else{
    return <></>
  }
}

export default WinLoseScreen