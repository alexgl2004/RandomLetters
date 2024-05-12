import { useState } from 'preact/hooks'
import preactLogo from './assets/preact.svg'
import viteLogo from '/vite.svg'
import './app.css'

function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomColor(){
  return '#'+Math.floor(Math.random()*16777215).toString(16);
  var color = '#';
  for (var i = 0; i < 6; i++) {
      color += Math.floor(Math.random() * 10);
  }
  return color;  
}

export function App() {
  const [count, setCount] = useState(0)

  const alphabet = "ÄÖÜABCDEFGHIJKLMNOPQRSTUVWXYZ";//"üäöabcdefghijklmnopqrstuvwxyz";
  const alphabetArr = alphabet.split('');

  const countLetters = 116;
  let i = 0;
  let arrOut = []
  while( i <= countLetters){
    arrOut.push(alphabetArr[randomIntFromInterval(0,alphabetArr.length-1)])
    i++;
  }


  return (
    <>
      <div style={{display:'flex',flexWrap:'wrap',flexDirection:'row', gap: 1, width:'100%'}}>
        {arrOut.map((elem)=>{
          return (
            <div style={{width:70, height:70, fontSize:18, color: randomColor()}}>
              {elem}
            </div>
          )
        })}
      </div>
    </>
  )
}
