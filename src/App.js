
import { useState } from 'react';
import './componenets/Game.css';
import { Sqare } from './componenets/Sqare';

function App() {
  const initstate=["","","","","","","","",""];

  const[game,setGame]=useState(initstate);
  const[step,setStep]=useState(0)


  const handleclick=(e)=>{
    // console.log(e.target)
    const newstate=[...game];
    if(!e.target.innerText){
      newstate[e.target.id]=step%2==0?"X":"O";
    setStep(step+1)
    setGame(newstate);
    }
  }
  const restart=()=>{
    setGame(initstate);
    setStep(0)
  }
  
  return (
    <div className="container">
     <div className="left_side">
       <div className='left_text'>Let's  play the Tic-Tac-Toe</div>
       <div className='button' onClick={restart}>Start a game</div>
     </div>
     <div className='right_side'>
       <div className='players'>
         <div className={` player  ${step%2==0 && "player_x"}`}>Player-x</div>
         <div className={` player  ${step%2==1 && "player_o"}`}>Player-o</div>
       </div>
       <div className='game' onClick={handleclick}>
         <Sqare id={0} state={game[0]} className="border_right_bottom"/>
         <Sqare id={1}  state={game[1]} className="border_right_bottom"/>
         <Sqare id={2}  state={game[2]} className="border_bottom"/>
         <Sqare id={3}  state={game[3]}className="border_right_bottom"/>
         <Sqare id={4}  state={game[4] }className="border_right_bottom"/>
         <Sqare id={5}  state={game[5]} className="border_bottom"/>
         <Sqare id={6}  state={game[6]} className="border_right"/>
         <Sqare id={7}  state={game[7]} className="border_right"/>
         <Sqare id={8} state={game[8]} />
       </div>
     </div>
    </div>
  );
}

export default App;
