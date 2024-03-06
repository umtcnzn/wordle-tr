
import words from "./words.json"

export const getRandomWord = () => {
    const randomIndex = Math.floor(Math.random()*words.length);
    return words[randomIndex];
}


export const checkWord = (word:string) => {
    if(words.includes(word)) return true;
    return false;
}