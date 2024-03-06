import React from 'react'

type KeyboardProps = {
    input:string,
    setInput:(input:string)=>void,
    handleSubmit:(event:any)=>void,
    isFinish:boolean,
}

const keys = ["e","r","t","y","u","ı","o","p","ğ","ü","backspace","a","s","d","f","g","h","j","k","l","ş","i","z","c","v","b","n","m","ö","ç","enter"];




function Keyboard({input,setInput,handleSubmit,isFinish}:KeyboardProps) {

    const handleClick = (key:string,event:any) => {
        if(isFinish) return;
        
        if(key === "backspace"){
            setInput(input.slice(0,-1));
            return;
        }
        if(key === "enter"){
            handleSubmit(event);
            return;
        }
        setInput((input + key.toLocaleUpperCase("tr")).slice(0,5));
    }    

  return (
    <>
        <div className='flex justify-center'>
            <div className='flex flex-wrap gap-1 w-[490px]'>
                {keys.map((key,idx)=>{
                    return <kbd key={idx} className='kbd' onClick={(e)=> handleClick(key,e)}>{key}</kbd>
                })}
            </div>
        </div>
    </>
  )
}

export default Keyboard

// (e) => 
//                             {key==="enter" ? handleSubmit(e):
//                             key==="backspace" ? setInput(input.slice(0,-1)):
//                             setInput((input + key.toLocaleUpperCase("tr")).slice(0,5))}}>
//                             {key.toLocaleUpperCase("tr")

// <div className="flex justify-center gap-1 my-1 w-full kbd-lg">
//             <kbd className="kbd" onClick={()=>setInput((input+'E'.slice(0,5)))}>e</kbd>
//             <kbd className="kbd" onClick={()=>setInput((input+'R'.slice(0,5)))}>r</kbd>
//             <kbd className="kbd" onClick={()=>setInput((input+'T'.slice(0,5)))}>t</kbd>
//             <kbd className="kbd" onClick={()=>setInput((input+'Y'.slice(0,5)))}>y</kbd>
//             <kbd className="kbd" onClick={()=>setInput((input+'U'.slice(0,5)))}>u</kbd>
//             <kbd className="kbd" onClick={()=>setInput((input+'I'.slice(0,5)))}>ı</kbd>
//             <kbd className="kbd" onClick={()=>setInput((input+'O'.slice(0,5)))}>o</kbd>
//             <kbd className="kbd" onClick={()=>setInput((input+'P'.slice(0,5)))}>p</kbd>
//             <kbd className="kbd" onClick={()=>setInput((input+'Ğ'.slice(0,5)))}>ğ</kbd>
//             <kbd className="kbd" onClick={()=>setInput((input+'Ü'.slice(0,5)))}>ü</kbd>
//             <kbd className="kbd" onClick={()=>setInput(input.slice(0,-1))}>Backspace {"<-"}</kbd>
//         </div> 
//         <div className="flex justify-center gap-1 my-1 w-full kbd-lg">
//             <kbd className="kbd" onClick={()=>setInput((input+'A'.slice(0,5)))}>a</kbd>
//             <kbd className="kbd" onClick={()=>setInput((input+'S'.slice(0,5)))}>s</kbd>
//             <kbd className="kbd" onClick={()=>setInput((input+'D'.slice(0,5)))}>d</kbd>
//             <kbd className="kbd" onClick={()=>setInput((input+'E'.slice(0,5)))}>f</kbd>
//             <kbd className="kbd" onClick={()=>setInput((input+'F'.slice(0,5)))}>g</kbd>
//             <kbd className="kbd" onClick={()=>setInput((input+'H'.slice(0,5)))}>h</kbd>
//             <kbd className="kbd" onClick={()=>setInput((input+'J'.slice(0,5)))}>j</kbd>
//             <kbd className="kbd" onClick={()=>setInput((input+'K'.slice(0,5)))}>k</kbd>
//             <kbd className="kbd" onClick={()=>setInput((input+'L'.slice(0,5)))}>l</kbd>
//             <kbd className="kbd" onClick={()=>setInput((input+'Ş'.slice(0,5)))}>ş</kbd>
//             <kbd className="kbd" onClick={()=>setInput((input+'İ'.slice(0,5)))}>i</kbd>
//         </div> 
//         <div className="flex justify-center gap-1 my-1 w-full kbd-lg">
//             <kbd className="kbd" onClick={()=>setInput((input+'Z'.slice(0,5)))}>z</kbd>
//             <kbd className="kbd" onClick={()=>setInput((input+'C'.slice(0,5)))}>c</kbd>
//             <kbd className="kbd" onClick={()=>setInput((input+'V'.slice(0,5)))}>v</kbd>
//             <kbd className="kbd" onClick={()=>setInput((input+'B'.slice(0,5)))}>b</kbd>
//             <kbd className="kbd" onClick={()=>setInput((input+'N'.slice(0,5)))}>n</kbd>
//             <kbd className="kbd" onClick={()=>setInput((input+'M'.slice(0,5)))}>m</kbd>
//             <kbd className="kbd" onClick={()=>setInput((input+'Ö'.slice(0,5)))}>ö</kbd>
//             <kbd className="kbd" onClick={()=>setInput((input+'Ç'.slice(0,5)))}>ç</kbd>
//             <kbd className="kbd" onClick={handleSubmit}>Enter</kbd>
//         </div>