import { useState } from 'react'


function App() {
  const [nome, setNome] = useState("")

  const [count, setCount] = useState(1)
  
  function mostrarValor(){
    setCount(count +1)
  }

  return (  <div>
    <h1>deu bom {nome}</h1>
    
    <h2>{count}</h2>

    <input  value={nome} onChange={(e)=> setNome(e.target.value)}/>
    
    <div>
      <button onClick={mostrarValor}>click</button>
    </div>
   
  </div> )
}

export default App
