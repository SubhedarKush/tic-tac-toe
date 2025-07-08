import { useState } from 'react'


function App() {

  const [cells, setCells] = useState(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState(true);
  const [winner, setWinner] = useState(null);
  const combos = [
      [0,1,2],[3,4,5],[6,7,8], // rows
      [0,3,6],[1,4,7],[2,5,8], // columns
      [0,4,8],[2,4,6]          // diagonals
    ];

  const checkWinner = (cells) => {
   
    for (let [a,b,c] of combos) {
      if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
        return cells[a];
      }
    }
    return null;
  };

  const handleClick = (index) => {
    if (cells[index] || winner) return;

    const updatedCells = [...cells];
    updatedCells[index] = isXTurn ? "X" : "O";
    setCells(updatedCells);
    const win = checkWinner(updatedCells);
    if (win) setWinner(win);
    else setIsXTurn(!isXTurn);
  };

  const resetGame = () => {
    setCells(Array(9).fill(null));
    setIsXTurn(true);
    setWinner(null);
  };
 
  return (
    <div className='h-full w-full'>
      <div className='bg-[#031927] min-h-screen flex items-center justify-center'>

      <div className='flex flex-col items-center'>
     
{winner ? (
  <>
    <button onClick={resetGame} className='text-3xl bg-[#24f1cc] text-white px-6 py-2 rounded-2xl font-bold shadow-md hover:brightness-110 transition'> Reset Game </button>
    <p className='text-4xl font-semibold text-[#d2d5dd] mt-4'> '{winner}' Wins </p>
  </>
) : cells.every(cell => cell !== null) ? (  
  <>
    <button onClick={resetGame} className='text-3xl bg-[#24f1cc] text-white px-6 py-2 rounded-2xl font-bold shadow-md hover:brightness-110 transition'> Reset Game </button>
    <p className='text-4xl font-semibold text-[#d2d5dd] mt-4'> Game Draw </p>
  </>
) : ( <h1 className='font-bold text-5xl text-[#d2d5dd] mb-4'>Lets play </h1>)}

     {/*Game box */}
 <div className='h-[27rem] w-[27rem] bg-[#0061ff] rounded-3xl mt-9 flex flex-wrap gap-2 p-2'>
      <button onClick={() => handleClick(0)} className='h-[calc(33.33%-0.5rem)] w-[calc(33.33%-0.5rem)] bg-[#60efff] flex items-center justify-center text-7xl text-[#f10f0f] rounded-3xl font-bold '>{cells[0]}</button>
      <button onClick={() => handleClick(1)} className='h-[calc(33.33%-0.5rem)] w-[calc(33.33%-0.5rem)] bg-[#60efff] flex items-center justify-center text-7xl text-[#f10f0f] rounded-3xl font-bold '>{cells[1]}</button>
      <button onClick={() => handleClick(2)} className='h-[calc(33.33%-0.5rem)] w-[calc(33.33%-0.5rem)] bg-[#60efff] flex items-center justify-center text-7xl text-[#f10f0f] rounded-3xl font-bold '>{cells[2]}</button>
      <button onClick={() => handleClick(3)} className='h-[calc(33.33%-0.5rem)] w-[calc(33.33%-0.5rem)] bg-[#60efff] flex items-center justify-center text-7xl text-[#f10f0f] rounded-3xl font-bold '>{cells[3]}</button>
      <button onClick={() => handleClick(4)} className='h-[calc(33.33%-0.5rem)] w-[calc(33.33%-0.5rem)] bg-[#60efff] flex items-center justify-center text-7xl text-[#f10f0f] rounded-3xl font-bold '>{cells[4]}</button>
      <button onClick={() => handleClick(5)} className='h-[calc(33.33%-0.5rem)] w-[calc(33.33%-0.5rem)] bg-[#60efff] flex items-center justify-center text-7xl text-[#f10f0f] rounded-3xl font-bold '>{cells[5]}</button>
      <button onClick={() => handleClick(6)} className='h-[calc(33.33%-0.5rem)] w-[calc(33.33%-0.5rem)] bg-[#60efff] flex items-center justify-center text-7xl text-[#f10f0f] rounded-3xl font-bold '>{cells[6]}</button>
      <button onClick={() => handleClick(7)} className='h-[calc(33.33%-0.5rem)] w-[calc(33.33%-0.5rem)] bg-[#60efff] flex items-center justify-center text-7xl text-[#f10f0f] rounded-3xl font-bold '>{cells[7]}</button>
      <button onClick={() => handleClick(8)} className='h-[calc(33.33%-0.5rem)] w-[calc(33.33%-0.5rem)] bg-[#60efff] flex items-center justify-center text-7xl text-[#f10f0f] rounded-3xl font-bold '>{cells[8]}</button>
    </div>
    </div>
    </div>
    </div>
  )
}

export default App
 