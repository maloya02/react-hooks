import React from 'react';
import './App.css';
import AATabs from './Components/AATabs';
import AAuseStateComp from './Components/AAuseStateComp';
import AAuseContextComp from './Components/AAuseContextComp';
import AAuseReducerComp from './Components/AAuseReducerComp';
import AAuseEffectComp from './Components/AAuseEffectComp';
import AAuseRefComp from './Components/AAuseRefComp';
import AAuseLayoutEffectComp from './Components/AAuseLayoutEffectComp';
import AAuseImperativeHandleComp from './Components/AAuseImperativeHandleComp';
import AAuseMemoComp from './Components/AAuseMemoComp';
import AAuseCallBackComp from './Components/AAuseCallBackComp';
import AAnavBar from './Components/AAnavBar';


const componentArray = [
  <AAuseStateComp />,
  <AAuseReducerComp />,
  <AAuseEffectComp />,
  <AAuseRefComp />,
  <AAuseLayoutEffectComp />,
  <AAuseImperativeHandleComp />,
  <AAuseContextComp />,
  <AAuseMemoComp />,
  <AAuseCallBackComp />,
];

function App() {
  
  return (
    <div className="App">
      <AAnavBar/>
      <AATabs componentArray={componentArray} />
      <br /><br /><br /><br />
      
    </div>
  );
}

export default App;
