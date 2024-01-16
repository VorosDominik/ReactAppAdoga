
import './App.css';
import Kieg from './components/Kieg/Kieg';
import Model from './components/model/Model';
import { szenvedoMondatok } from './components/adatok/angol';
import { useState } from 'react';

function App() {

  const [index, setindex] = useState(2);
  const model=new Model()
  const katt=()=>{
    const newindex=index+1
    setindex(newindex)

  }
  const vizsgal =()=>{
    console.log(model.helyes(index))
  }
  return (
    <div className="App" onClick={vizsgal} >
      
    <Kieg mondat={model.Mondat(index)} katt={katt} helyes={model.helyes} index={index} />



    </div>
  );
}

export default App;
