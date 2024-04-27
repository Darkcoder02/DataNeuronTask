import React, {useState} from 'react';
import Header from './components/Header';
import Body from './components/Body';
import ButtonsContainer from './components/ButtonsContainer';

function App() {
  const[theme, setTheme] = useState('light');
  return (
    <div 
    className={`flex flex-col justify-between w-screen min-h-screen transition-all ${theme==='light' ? 'bg-[#ff6961]' : 'bg-[#00141a]'}`}
    >
      <Header theme={theme} setTheme={setTheme}/>
      <Body theme={theme} setTheme={setTheme}/>
      <ButtonsContainer theme={theme} setTheme={setTheme}/>
    </div>
  ); 
}

export default App;
