import { useEffect, useState } from 'react';
import WordInput from './components/WordInput';
import { checkWord } from './utils/getandCheckWords';
import Keyboard from './components/Keyboard';
import toast from 'react-hot-toast';
import Navbar from './components/Navbar';
import { useGameContext } from './context/GameContext';
import WinLoseScreen from './components/WinLoseScreen';


function App() {


  const [inputs,setInputs] = useState<string[]>(["","","","","",""]);
  const [input,setInput] = useState<string>("");
  const [index, setIndex] = useState(0);


  const {gameStats,handleGameStats,resetGameStats} = useGameContext();

  const [isFinish,setIsFinish] = useState(false);


  const changeInputs = (gameStatus:string) => {
    const newInputs = [...inputs];
    newInputs[index] = input;
    setInputs(newInputs);
    const newIndex = index + 1;
    setIndex(newIndex);
    handleGameStats({gameStatus,solution:gameStats.solution,guesses:newInputs,rowIndex:newIndex});
    setInput("");
  }


  const handleSubmit = () => {
    if(!input || input.length < 5) return;

    if(!checkWord(input.toLocaleLowerCase("tr"))){
      setInput(input.slice(0,-1));
      return toast.error("Geçersiz kelime!",{
        duration:1500
      });
    }

    if(index === inputs.length - 1){
      setIsFinish(true);
      changeInputs("LOSE");
      return;
    }

    if(input.toLocaleLowerCase("tr") === gameStats.solution){
      setIsFinish(true);
      changeInputs("WIN");
      return;
    }
    changeInputs("CONTINUE");
    
  }


  useEffect(() => {

    const handleKeyDown = (event: KeyboardEvent) => {
     
      if(isFinish) return;

      if (event.key === 'Backspace') {
        setInput(prevInput => prevInput.slice(0, -1));
        return;
      } 
      if(event.key === "Enter"){
        handleSubmit();
      }
      if (/^[ertyuıopğüasdfghjklşiİzcvbnmöç]$/i.test(event.key)) {
        setInput(prevInput => (prevInput + event.key.toLocaleUpperCase("tr")).slice(0,5));
        return;
      }
    };

    window.addEventListener('keydown', handleKeyDown);


    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [input,isFinish]);



  useEffect(()=>{
    if(gameStats)
      updateInputs();
    else
      resetGameStats();
  },[])



  const updateInputs = () => {
    setIndex(gameStats.rowIndex);
    setInputs(gameStats.guesses);
    setInput("");
  }

  const restartGame = () => {
    resetGameStats();
    setIndex(0);
    setInputs(["","","","","",""]);
    setInput("");
    setIsFinish(false);
  }
  


  return (
    <div className='h-screen'>
      <div>
          <Navbar />
      </div>
      <div className='flex justify-center pt-4'>
          <div className='flex gap-2 flex-col'>
            {inputs.map((word,idx)=>{
              return <WordInput key={idx} word={idx === index ? input : word} isActive={idx === index}/>
            })}
          </div>
      </div>
      <div className='pt-4'>
        <Keyboard input={input} setInput={setInput} handleSubmit={handleSubmit} isFinish={isFinish}/>
      </div>
        <WinLoseScreen restartGame={restartGame}/>
    </div>
  );
}

export default App;

